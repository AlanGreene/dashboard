/*
Copyright 2019-2023 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Dropdown, OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import {
  PendingFilled20 as DefaultIcon,
  ChevronDown20 as ExpandIcon
} from '@carbon/icons-react';
import {
  getStepStatusReason,
  getTranslateWithId,
  updateUnexecutedSteps
} from '@tektoncd/dashboard-utils';

import StatusIcon from '../StatusIcon';
import Step from '../Step';

class Task extends Component {
  state = { hasWarning: false, selectedStepId: null };

  componentDidMount() {
    this.selectDefaultStep();
    this.getStepData({ propagateWarning: true });
  }

  componentDidUpdate(prevProps) {
    const { reason } = this.props;
    if (prevProps.reason !== reason && reason === 'Succeeded') {
      this.getStepData({ propagateWarning: true });
    }
  }

  getStepData({ propagateWarning = false } = {}) {
    const { reason, selectedStepId, steps } = this.props;
    let hasWarning = false;
    const stepData = updateUnexecutedSteps(steps).map(step => {
      const { name } = step;
      const {
        exitCode,
        status,
        reason: stepReason
      } = getStepStatusReason(step);

      if (stepReason === 'Completed') {
        hasWarning = hasWarning || exitCode !== 0;
      }

      const selected = selectedStepId === name;
      const stepStatus =
        reason === 'TaskRunCancelled' && status !== 'terminated'
          ? 'cancelled'
          : status;

      return { exitCode, name, selected, stepReason, stepStatus };
    });

    if (propagateWarning) {
      this.setState({ hasWarning });
    }

    return stepData;
  }

  handleClick = () => {
    const { id } = this.props;
    const { selectedStepId } = this.state;
    this.props.onSelect(id, selectedStepId);
  };

  handleStepSelected = selectedStepId => {
    // TODO: [AG] preserve selected retry
    this.setState({ selectedStepId }, () => {
      this.handleClick();
    });
  };

  handleTaskSelected = event => {
    event?.preventDefault();
    this.setState({ selectedStepId: null }, () => {
      this.handleClick();
    });
  };

  selectDefaultStep() {
    const { expanded, selectDefaultStep, selectedStepId, steps } = this.props;
    if (!selectDefaultStep) {
      return;
    }
    if (expanded && !selectedStepId) {
      const erroredStep = steps.find(
        step => step.terminated?.reason === 'Error' || !step.terminated
      );
      const { name } = erroredStep || steps[0] || {};
      this.handleStepSelected(name);
    }
  }

  render() {
    const { displayName, expanded, intl, onRetryChange, reason, selectedRetry, selectedStepId, succeeded, taskRun } =
      this.props;
    const { hasWarning } = this.state;

    const expandIcon = expanded ? null : (
      <ExpandIcon className="tkn--task--expand-icon" />
    );

    let retryName;
    if (selectedRetry || taskRun.status?.retriesStatus) {
      if (selectedRetry === '0') {
        retryName = intl.formatMessage(
          {
            id: 'dashboard.pipelineRun.pipelineTaskName.firstAttempt',
            defaultMessage: '{pipelineTaskName} (first attempt)'
          },
          { pipelineTaskName: displayName }
        );
      } else {
        retryName = intl.formatMessage(
          {
            id: 'dashboard.pipelineRun.pipelineTaskName.retry',
            defaultMessage: '{pipelineTaskName} (retry {retryNumber, number})'
          },
          { pipelineTaskName: displayName, retryNumber: selectedRetry || taskRun.status.retriesStatus.length }
        );
      }
    }

    // TODO: [AG] remove this when finished with experiments
    const useDropdown = false;

    return (
      <li
        className="tkn--task"
        data-active={expanded || undefined}
        data-has-warning={hasWarning}
        data-reason={reason}
        data-succeeded={succeeded}
        data-selected={(expanded && !selectedStepId) || undefined}
      >
        <span
          className="tkn--task-link"
          // href="#"
          tabIndex={0}
          title={retryName || displayName}
          onClick={this.handleTaskSelected}
          onKeyUp={e => e.key === 'Enter' && this.handleTaskSelected(e)}
        >
          <StatusIcon
            DefaultIcon={DefaultIcon}
            hasWarning={hasWarning}
            reason={reason}
            status={succeeded}
          />
          {(!expanded || !taskRun.status?.retriesStatus || !useDropdown) && <span className="tkn--task-link--name">{retryName || displayName}</span>}
          {/*
            TODO: [AG] address a11y / structure issues - dropdown in anchor not valid
            TODO: [AG] address usability issues - when currently viewing step, not easy to select taskrun without opening dropdown, need to click before / after it instead…
          */}
          {expanded && taskRun.status?.retriesStatus && useDropdown ? (
            <Dropdown
              disabled={!expanded}
              hideLabel
              id="taskRunRetriesDropdown"
              items={taskRun.status.retriesStatus.map((retryStatus, index) => ({ id: index, text: intl.formatMessage(
                {
                  id: 'dashboard.pipelineRun.pipelineTaskName.retry',
                  defaultMessage: '{pipelineTaskName} (retry {retryNumber, number})'
                },
                { pipelineTaskName: displayName, retryNumber: index }
              ) })).concat([{ id: '', text: intl.formatMessage(
                {
                  id: 'dashboard.pipelineRun.pipelineTaskName.retry',
                  defaultMessage: '{pipelineTaskName} (retry {retryNumber, number})'
                },
                { pipelineTaskName: displayName, retryNumber: taskRun.status.retriesStatus.length }
              ) }])}
              itemToString={item => (item ? item.text : '')}
              label="Retries" // TODO: [AG]
              onChange={({ selectedItem }) => {
                onRetryChange(selectedItem.id);
              }}            
              selectedItem={{ id: selectedRetry ?? '', text: intl.formatMessage(
                {
                  id: 'dashboard.pipelineRun.pipelineTaskName.retry',
                  defaultMessage: '{pipelineTaskName} (retry {retryNumber, number})'
                },
                { pipelineTaskName: displayName, retryNumber: selectedRetry ?? taskRun.status.retriesStatus.length }
              ) }}
              size="sm"
              titleText="Retries"
              translateWithId={getTranslateWithId(intl)}
              type="inline"
            />
          ) : null}
          {expanded && taskRun.status?.retriesStatus && !useDropdown ? (
            <OverflowMenu
              ariaLabel="View retries" // TODO: [AG] extract
              // className={`tkn--actions-dropdown${
              //   isButton ? ' tkn--actions-dropdown--button' : ''
              // }`}
              // direction="top"
              // flipped
              iconDescription="View retries" // TODO: [AG] extract (duplicate above)
              menuOptionsClass='tkn--task--retries-menu-options'
              selectorPrimaryFocus="button:not([disabled])"
              size="sm"
              title="View retries" // TODO: [AG] extract (duplicate above)
              // renderIcon={
              //   isButton
              //     ? iconProps => (
              //         <span
              //           {...iconProps}
              //           className="bx--btn bx--btn--md bx--btn--tertiary"
              //         >
              //           {title}
              //           <CaretDown16 className="bx--btn__icon" />
              //         </span>
              //       )
              //     : undefined
              // }
            >
              {
                taskRun.status.retriesStatus.map((retryStatus, index) => {
                  if (index === 0) {
                    return {
                      id: index,
                      text: intl.formatMessage(
                        {
                          id: 'dashboard.pipelineRun.retries.viewFirstAttempt',
                          defaultMessage: 'View first attempt'
                        }
                      )
                    };
                  }
                  return {
                    id: index,
                    text: intl.formatMessage(
                      {
                        id: 'dashboard.pipelineRun.retries.viewRetry',
                        defaultMessage: 'View retry {retryNumber, number}'
                      },
                      { retryNumber: index }
                    )
                  };
                }).concat([{ id: '', text: intl.formatMessage(
                  {
                    id: 'dashboard.pipelineRun.retries.viewLatestRetry',
                    defaultMessage: 'View latest retry'
                  }
                ) }]).map(item =>
                  <OverflowMenuItem
                    disabled={`${item.id}` === selectedRetry}
                    itemText={item.text}
                    key={item.text}
                    onClick={() => onRetryChange(item.id)}
                    requireTitle
                    wrapperClassName='tkn--task--retries-menu-option'
                  />
                )
              }
            </OverflowMenu>
          ) : null}
          {expandIcon}
        </span>
        {expanded && (
          <ol className="tkn--step-list">
            {this.getStepData().map(step => {
              const { exitCode, name, selected, stepReason, stepStatus } = step;
              return (
                <Step
                  exitCode={exitCode}
                  id={name}
                  key={name}
                  onSelect={this.handleStepSelected}
                  reason={stepReason}
                  selected={selected}
                  status={stepStatus}
                  stepName={name}
                />
              );
            })}
          </ol>
        )}
      </li>
    );
  }
}

Task.defaultProps = {
  steps: []
};

export default injectIntl(Task);
