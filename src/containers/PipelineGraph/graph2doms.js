import * as d3 from 'd3';
import * as $ from 'jquery';
import * as ELK from 'elkjs/lib/elk.bundled';

const debug = console.log.bind(console);
const pictureInPicture = (...args) => {
  debug('pictureInPicture outer', ...args);
  return (...innerArgs) => debug('pictureInPicture inner', ...innerArgs);
};

const defaultMaxLabelLength = 10;

const wfColorAct = {
  active: '#81C784',
  failed: '#EC7063',
  activeHovered: '#33a02c',
  failedHovered: 'red',
  inactive: 'lightgrey',
  edgeInactive: 'grey',
  inactiveBorder: 'grey'
};

export const textualPropertiesOfCode = code => {
  const lines = code.split(/[\n\r]/);
  const nLines = lines.length;
  const maxLineLength = lines.reduce(
    (max, line) => Math.max(max, line.length),
    0
  );

  return { nLines, maxLineLength };
};

export default function graph2doms(
  JSONgraph,
  containerElement,
  activations,
  {
    layoutOptions = {},
    composites = { label: { fontSize: '4px', offset: { x: 0, y: -2 } } }
  } = {}
) {
  const maxLabelLength =
    (JSONgraph.properties && JSONgraph.properties.maxLabelLength) ||
    defaultMaxLabelLength;
  const defaultFontSize =
    (JSONgraph.properties && JSONgraph.properties.fontSize) || '7px';

  const zoom = d3.zoom().on('zoom', redraw); // eslint-disable-line

  const wskflowContainer = $('<div id="wskflowContainer"></div>');
  let enterClickMode = false;

  $(containerElement).append(wskflowContainer);

  $(wskflowContainer).addClass('grabbable'); // we want to use grab/grabbing cursor

  const ssvg = d3
    .select($(wskflowContainer)[0])
    .append('svg')
    .attr('id', 'wskflowSVG')
    .attr('data-is-session-flow', !!activations)
    .call(zoom);

  const container = ssvg.append('g').on('dblclick.zoom', null);

  const svg = container.append('g').attr('id', 'wskflowMainG');

  const defs = svg.append('svg:defs');

  // a pattern mask for "not deployed"
  defs
    .append('svg:pattern')
    .attr('id', 'pattern-stripe')
    .attr('width', 1.2)
    .attr('height', 1.2)
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('patternTransform', 'rotate(45)')
    .append('svg:rect')
    .attr('width', 0.6)
    .attr('height', 2)
    .attr('transform', 'translate(0,0)')
    .attr('fill', '#aaa'); // this will be the opacity of the mask, from #fff (full masking) to #000 (no masking)
  defs
    .append('svg:mask')
    .attr('id', 'mask-stripe')
    .append('svg:rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', 'url(#pattern-stripe)');

  // a heavier pattern mask
  defs
    .append('svg:pattern')
    .attr('id', 'pattern-stripe-heavy')
    .attr('width', 1.2)
    .attr('height', 1.2)
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('patternTransform', 'rotate(45)')
    .append('svg:rect')
    .attr('width', 1)
    .attr('height', 2)
    .attr('transform', 'translate(0,0)')
    .attr('fill', '#aaa'); // this will be the opacity of the mask, from #fff (full masking) to #000 (no masking)
  defs
    .append('svg:mask')
    .attr('id', 'mask-stripe-heavy')
    .append('svg:rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', 'url(#pattern-stripe-heavy)');

  // define an arrow head
  const arrowHead = id => {
    const marker = defs
      .append('svg:marker')
      .attr('id', id)
      .attr('viewBox', '0 -5 10 10')
      .attr('markerUnits', 'userSpaceOnUse')
      .attr('markerWidth', 4.2) // marker settings
      .attr('markerHeight', 7)
      .attr('orient', 'auto');

    marker.append('svg:path').attr('d', 'M0,-5L10,0L0,5');

    return marker;
  };

  arrowHead('end');
  arrowHead('edgeTraversedEnd')
    .attr('markerWidth', 5.25)
    .attr('markerHeight', 8.75)
    .attr('refX', 2.4);
  arrowHead('greenEnd');

  defs
    .append('svg:g')
    .attr('id', 'retryIconNormal')
    .attr('transform', 'scale(0.02) rotate(90)')
    .append('svg:path')
    .attr(
      'd',
      'M852.8,558.8c0,194.5-158.2,352.8-352.8,352.8c-194.5,0-352.8-158.3-352.8-352.8c0-190.8,152.4-346.7,341.8-352.5v117.4l176.4-156.9L489,10v118C256.3,133.8,68.8,324.8,68.8,558.8C68.8,796.6,262.2,990,500,990c237.8,0,431.2-193.4,431.2-431.2H852.8z'
    );

  if (!$('#qtip')[0]) {
    $(document.body).append(
      "<div id='qtip'><span id='qtipArrow'>&#9668</span><div id='qtipContent'></div></div>"
    );
  }

  if (activations) {
    $(wskflowContainer).append(
      "<div id='actList' style='position: absolute; display:none; background-color: rgba(0, 0, 0, 0.8); color: white; font-size: 0.75em; padding: 1ex; width:225px; right: 5px; top: 5px;'></div>"
    );
  }

  const root = svg.append('g');
  let elkData;

  //
  // After many tests, this is the right way to manually adjust values
  // for `transform` without introducing unwanted behavior when
  // zooming by mouse scrolling using d3's zoom feature.
  //
  // We have to set d3's zoom variable to have the same values as the
  // values we'd like for `transform`. So when d3 calculates the
  // values for event.translate/scale, it takes our manual adjustments
  // into account.
  //
  let applyAutoScale = true; // if resizing the window will resize the graph. true by default.
  let customZoom = false;

  function resizeToFit(meetOrSlice) {
    // resizeToFit implements a zoom-to-fit behavior using viewBox.
    // it no longer requires knowing the size of the container
    // disadventage is we cannot decide the max zoom level: it will always zoom to fit the entire container
    ssvg.attr('viewBox', `0 0 ${elkData.width} ${elkData.height}`);
    ssvg.attr('preserveAspectRatio', `xMidYMin ${meetOrSlice}`);
    container.attr('transform', '');
    $('#wskflowSVG').removeAttr('transform');
    const selection = root.selectAll('.node');
    zoom.translateTo(selection, 0, 0);
    zoom.scaleTo(selection, 1);
  }
  const resizeToContain = () => resizeToFit('meet');
  const resizeToCover = () => {
    resizeToFit('slice');
    applyAutoScale = false;
  };

  function drawGraph(nodes, links) {
    // #1 add the nodes' groups
    const nodeData = root.selectAll('.node').data(nodes, d => d.id);

    const node = nodeData
      .enter()
      .append('g')
      .attr('transform', d => {
        return 'translate(' + (d.x || 0) + ' ' + (d.y || 0) + ')'; // eslint-disable-line
      })
      .attr('class', d => {
        let className = 'node';
        className += d.children ? ' compound' : ' leaf';
        className += ` ${d.type || d.label}`;

        return className;
      })
      .attr('id', d => d.id)
      .attr('data-name', d => {
        // make sure we obey the `/namespace/name` format
        const label =
          d.type === 'Entry' || d.type === 'Exit' ? d.type : d.label;
        return label && (label.charAt(0) !== '/' ? `/_/${label}` : label);
      })
      .attr('data-deployed', d => { // eslint-disable-line
        if (activations) {
          // empty
        } else {
          // only for preview graphs, not for session graphs
          if (d.deployed === false) { // eslint-disable-line
            return 'not-deployed';
          }
        }
      })
      .attr('data-status', function(d) { // eslint-disable-line
        if (activations) {
          if (d.visited) {
            let failed = true; // assumption: all fail is fail. if one succes, we count it as success
            d.visited.forEach(i => {
              if (activations[i] && activations[i].response.success) {
                failed = false;
              }
            });
            if (failed) {
              $(this).attr('failed', true);
              return 'failed';
            }
            return 'success';
          }
          return 'not-run';
        }
      });

    // add representing boxes for nodes
    const svgns = 'http://www.w3.org/2000/svg';
    node
      .append(() => document.createElementNS(svgns, 'rect'))
      .attr('class', d => {
        return (
          'atom' + // eslint-disable-line
          (d.onclick ? ' clickable has-onlick' : '')
        );
      })
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('rx', d => { // eslint-disable-line
        if (d.type === 'Entry' || d.type === 'Exit') {
          return '50%';
        }
      })
      .attr('ry', d => { // eslint-disable-line
        if (d.type === 'Entry' || d.type === 'Exit') {
          return '50%';
        }
      })
      .style('fill', d => { // eslint-disable-line
        if (d.children) {
          return 'transparent';
        }
      })
      .style('cursor', () => 'normal')
      .on('mouseover', function(d) { // eslint-disable-line
        let qtipText = '';

        if (activations) {
          if (
            d.children === undefined &&
            d.visited &&
            $('#actList').css('display') !== 'block'
          ) {
            if (d.type === 'Exit') {
              const act = activations[d.visited[0]];
              const start = new Date(act.start);
              let timeString =
                start.getMonth() + 1 + '/' + start.getDate() + ' '; // eslint-disable-line
              timeString += start.toLocaleTimeString(undefined, {
                hour12: false
              });
              let result = act.response.result
                ? JSON.stringify(act.response.result, undefined, 4)
                : '';
              if (result.length > 200) {
                result = result.substring(0, 200) + '\u2026'; // eslint-disable-line
              } // horizontal ellipsis

              qtipText += `<div style='padding-bottom:2px'><span class='qtip-prefix'>${
                d.type
              }</span> <span style='color:${
                wfColorAct.active
              }'>${timeString}</span></div>${result}`;
            }
          }
        } else if (d.type === 'Entry' || d.type === 'Exit') {
          qtipText = d.properties.title;
        }

        if (!qtipText && d.tooltip) {
          //
          // the above rules are pretty specific to Apache Composer
          // (TODO refactor); this allows for a more modern custom
          // tooltip to be driven by the graph model producer
          //
          qtipText = `<div class='qtip-prefix ${
            d.tooltipColor ? 'color-base' + d.tooltipColor : 'function' // eslint-disable-line
          }' style="margin-bottom:1ex; padding-right:5px; ">${d.tooltipHeader ||
            d.type}</div>${d.tooltip}`;
        }

        if (qtipText && qtipText.length !== 0) {
          $('#qtipContent').html(qtipText);

          $('#qtip').addClass('visible');
          $('#qtip').removeClass('qtip-pre');

          const rect = $(this)[0].getBoundingClientRect();
          let qtipX = rect.left + rect.width;
          let qtipY = rect.top + rect.height / 2 - $('#qtip').height() / 2;

          if ($('#wskflowContainer').hasClass('picture-in-picture')) {
            // currentScale: 0.25
            const scaleString = $('#wskflowContainer').css('transform');
            let scale;
            try {
              scale = parseFloat(
                scaleString.substring(
                  'matrix('.length,
                  scaleString.indexOf(',')
                )
              );
            } catch (e) {
              console.log({ e, scaleString });
              scale = 0.25;
            }

            qtipX /= scale;
            qtipY =
              $(this).offset().top +
              $(this)[0].getBoundingClientRect().height / 2 -
              ($('#qtip').height() / 2) * scale -
              $('#wskflowContainer').offset().top;
            qtipY /= scale;
          }
          $('#qtip').css({
            left: qtipX,
            top: qtipY
          });
        }
      })
      .on('mouseout', () => {
        $('.link').removeClass('hover');
        $('#qtip').removeClass('visible');
      })
      .on('mousedown', () => {
        enterClickMode = true;
      })
      .on('click', d => {
        if (!enterClickMode) {
          return;
        }
        enterClickMode = false;

        $('#qtip').removeClass('visible');
        if (d.onclick) {
          pictureInPicture(
            d.onclick,
            d3.event.currentTarget.parentNode, // highlight this node
            $('#wskflowContainer')[0],
            d.viewName || 'Flow Visualization'
          )(d3.event);
        } else if (activations) {
          if (d.visited) {
            if ($('#actList').css('display') !== 'block') {
              $('#listClose').click();
            }

            // if(d.type == "Exit" || d.type == 'Entry'){
            if (d.type === 'Exit') {
              // console.log(fsm.States[d.id].act[0]);
              pictureInPicture(
                activations[d.visited[0]],
                d3.event.currentTarget.parentNode, // highlight this node
                $('#wskflowContainer')[0],
                'App Visualization' // container to pip
              )(d3.event);
              /* pictureInPicture(`wsk activation get ${id}`, {echo: true}),
                                            d3.event.currentTarget.parentNode, // highlight this node
                                            $("#wskflowContainer")[0],
                                            'App Visualization'          // container to pip
                                            )(d3.event)               // pass along the raw dom event
                                */
            }
          }
        }
      });

    // add node labels
    node
      .append('text')
      .attr('width', d => d.width)
      .attr('x', d => {
        if (d.children) {
          return composites.label.offset.x;
        }
        return d.width / 2;
      })
      .attr('y', d => {
        if (d.children) {
          return composites.label.offset.y;
        }
        return (
          d.height / 2 + (d.type === 'Entry' || d.type === 'Exit' ? 1.5 : 2)
        );
      })
      .attr('font-size', d => {
        if (d.children) {
          return composites.label.fontSize;
        }
        if (d.properties && d.properties.fontSize) {
          return d.properties.fontSize;
        }
        if (d.type === 'Entry' || d.type === 'Exit') {
          return '6px';
        }
        return defaultFontSize;
      })
      .style('text-anchor', function(d) { // eslint-disable-line
        if (!d.children) {
          return 'middle';
        }
      })
      .style('pointer-events', 'none')
      .text(d => {
        if (d.id === 'root') {
          return '';
        }
        if (d.children) {
          return d.label;
        }

        let t = d.label;
        if (t === undefined) {
          t = d.id;
        }

        if (t.length > maxLabelLength) {
          return t.substring(0, maxLabelLength - 1) + '...'; // eslint-disable-line
        }
        return t;
      });

    // #2 add paths with arrows for the edges
    root
      .selectAll('.link')
      .data(links, d => d.id)
      .enter()
      .append('path')
      .attr('id', d => d.id)
      .attr('d', 'M0 0')
      .attr('marker-end', d => {
        if (d.visited) {
          return 'url(#greenEnd)';
        }
        return 'url(#end)';
      })
      .attr('class', d => {
        let s = 'link';
        if (d.properties) {
          for (const key in d.properties) { // eslint-disable-line
            s += ` ${key}`;
          }
        }

        return s;
      })
      .attr('data-visited', d => d.visited) // edge was visited?
      .attr('source', d => d.sourcePort)
      .on('mouseout', () => {
        $('#qtip').removeClass('visible');
      })
      .attr('d', function(d) { // eslint-disable-line
        let path = '';
        if (d.sourcePoint && d.targetPoint) {
          path += 'M' + d.sourcePoint.x + ' ' + d.sourcePoint.y + ' '; // eslint-disable-line
          (d.bendPoints || []).forEach(function(bp) { // eslint-disable-line
            path += 'L' + bp.x + ' ' + bp.y + ' '; // eslint-disable-line
          });

          const offsetY = 4.2; // arrowhead hacking
          const offsetX = 0;

          path +=
            'L' + // eslint-disable-line
            (d.targetPoint.x + offsetX) +
            ' ' +
            (d.targetPoint.y - offsetY) +
            ' ';
        }
        return path;
      });

    const addMorePathAttr = () =>
      root
        .selectAll('path')
        .attr('data-from-name', function(d) { // eslint-disable-line
          const fromId = d.source;
          const isName = $('#' + fromId).attr('data-name'); // eslint-disable-line
          if (isName) {
            return isName;
          }
        })
        .attr('data-to-name', function(d) { // eslint-disable-line
          const toId = d.target;
          const isName = $('#' + toId).attr('data-name'); // eslint-disable-line
          if (isName) {
            return isName;
          }
        });

    setTimeout(() => {
      d3.select('.repeat')
        .append('use')
        .attr('xlink:href', '#retryIconNormal')
        .attr('href', '#retryIconNormal')
        .attr('x', 10)
        .attr('y', -14);
    }, 0);

    setTimeout(addMorePathAttr, 0); // we aren't properly using d3.select.enter... hacking a bit, for now
  } /* drawGraph */

  const elk = new ELK();
  const doneRendering = elk
    .layout(JSONgraph, {
      layoutOptions: Object.assign(
        {
          'elk.algorithm': 'org.eclipse.elk.layered',
          'org.eclipse.elk.direction': 'DOWN',
          'org.eclipse.elk.edgeRouting': 'ORTHOGONAL',
          'org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment': 'BALANCED',
          'elk.layered.spacing.nodeNodeBetweenLayers': 15, // org.eclipse. prefix doesn't work (elk bug???)
          // 'org.eclipse.elk.layered.cycleBreaking.strategy': "DEPTH_FIRST",
          'org.eclipse.elk.insideSelfLoops.activate': true
        },
        layoutOptions
      )
    })
    .then(data => {
      elkData = data;

      // By default, the graph resizes to fit the size
      // of the container i.e. zoom-to-contain, showing
      // the entire graph. This renders larger graphs
      // with tiny nodes on initial load; this check
      // introduces a heuristic to avoid tiny nodes on
      // initial display. This solves #582.
      const sidecar = $('#graph-container'); // TODO: get actual container, this is just a placeholder
      if (
        $(sidecar).height() > 400 &&
        elkData.height * 2 > $(sidecar).height()
      ) {
        resizeToCover();
      } else {
        resizeToContain();
      }

      const getNodes = function(graph) { // eslint-disable-line
        const queue = [graph];
        const nodes = [];
        let parent;
        // note that svg z-index is document order, literally
        while ((parent = queue.pop()) != null) { // eslint-disable-line
          nodes.push(parent);
          (parent.children || []).forEach(function(c) { // eslint-disable-line
            c.x += parent.x; // eslint-disable-line
            c.y += parent.y; // eslint-disable-line
            if (c.edges) {
              for (let i = 0; i < c.edges.length; i++) { // eslint-disable-line
                c.edges[i].sections[0].startPoint.x += c.x; // eslint-disable-line
                c.edges[i].sections[0].startPoint.y += c.y; // eslint-disable-line
                c.edges[i].sections[0].endPoint.x += c.x; // eslint-disable-line
                c.edges[i].sections[0].endPoint.y += c.y; // eslint-disable-line

                if (c.edges[i].sections[0].bendPoints) {
                  for (
                    let j = 0;
                    j < c.edges[i].sections[0].bendPoints.length;
                    j++ // eslint-disable-line
                  ) {
                    c.edges[i].sections[0].bendPoints[j].x += c.x; // eslint-disable-line
                    c.edges[i].sections[0].bendPoints[j].y += c.y; // eslint-disable-line
                  }
                }
              }
            }

            queue.push(c);
          });
        }
        return nodes;
      };

      const getLinks = nodes => {
        return d3.merge(nodes.map(n => n.edges || []));
      };
      const nodes = getNodes(data);
      const links = getLinks(nodes);
      console.log({ labels: links.map(link => link.labels) });
      const edges = [];
      links.forEach(link => {
        // convert new elk edge format into old klay edge format to work with the d3 drawing code
        // TODO: update the d3 drawing code to work with the elk edge format
        // new format doc: http://www.eclipse.org/elk/documentation/tooldevelopers/graphdatastructure/jsonformat.html
        const o = {
          id: link.id,
          labels: link.labels,
          visited: link.visited,
          source: link.source,
          sourcePort: link.sourcePort,
          target: link.target,
          targetPort: link.targetPort,
          sourcePoint: {
            x: link.sections[0].startPoint.x,
            y: link.sections[0].startPoint.y
          },
          targetPoint: {
            x: link.sections[0].endPoint.x,
            y: link.sections[0].endPoint.y
          },
          properties: link.properties,
          bendPoints: []
        };

        if (link.sections[0].bendPoints) {
          link.sections[0].bendPoints.forEach(bp => o.bendPoints.push(bp));
        }

        edges.push(o);
      });

      drawGraph(nodes, edges);
    })
    .catch(err => {
      console.error('[wskflow] error: ', err);
    }); /* end of doneRendering */

  // any interested parties for zoom events
  // and notify interested parties that we entered custom mode
  const handlers = [];
  const notify = () => handlers.forEach(_ => _({ applyAutoScale, customZoom }));

  /**
   * Zoom-to-fit button behavior
   *
   * @param useThisValue set a value, otherwise toggle the current value
   *
   */
  const zoomToFit = useThisValue => {
    applyAutoScale =
      useThisValue !== undefined ? useThisValue : !applyAutoScale; // toggle applyAutoScale
    customZoom = false;
    notify();
    if (applyAutoScale) {
      // when clicking to switch from inactive to active, it resizes the graph to fit the window. #422
      resizeToContain();
    } else {
      // when clicking to switch from active to inactive, it resizes the graph to zoom in at graph entry by 2x.
      resizeToCover();
    }
  };

  /*
   * from https://github.com/OpenKieler/klayjs-d3/blob/master/examples/interactive/index.js
   *
   * redraw is called by d3. d3.event.translate and
   * d3.event.scale handle moving the graph and zooming. Note
   * that when zooming, both event.translate and event.scale
   * change to let the zoom center be the mouse cursor. Adding
   * ohter values to event.translate and event.scale is likely
   * to cause unwanted behaviors.
   */
  function redraw() {
    // redraw is called when there's mouse scrolling
    if (applyAutoScale || !customZoom) {
      // exit zoom-to-fit mode when the user uses the mouse to move or zoom the graph
      applyAutoScale = false;
      customZoom = true;
      notify();
    }
    enterClickMode = false;

    container.attr(
      'transform',
      `matrix(${d3.event.transform.k}, 0, 0, ${d3.event.transform.k}, ${
        d3.event.transform.x
      }, ${d3.event.transform.y})`
    );
    $('#qtip').removeClass('visible');
  }

  // when zoom-to-fit is active, the graph resizes as the window resizes. #422
  $(window)
    .unbind('resize')
    .resize(() => {
      if (customZoom && $('#wskflowSVG').attr('viewBox') !== undefined) {
        // this code is called when the user is in custom zoom mode but the viewbox still exists
        // remove viewbox here to stop auto-resizing,
        $('#wskflowSVG').removeAttr('viewBox');
        // adjust transform to let the graph be in the same size and location
        const width = $('#wskflowSVG').width();
        const height = $('#wskflowSVG').height();
        const scale = Math.min(width / elkData.width, height / elkData.height);
        const initScale = scale * zoom.scale();
        const initTransX =
          width / 2 - (elkData.width * scale) / 2 + zoom.translate()[0] * scale;
        const initTransY =
          height / 2 -
          (elkData.height * scale) / 2 +
          zoom.translate()[1] * scale;
        zoom.translate([initTransX, initTransY]);
        zoom.scale(initScale);
        container.attr(
          'transform',
          `matrix(${initScale}, 0, 0, ${initScale}, ${initTransX}, ${initTransY})`
        );
      }
    });

  // exported API
  return doneRendering.then(() => ({
    view: $(containerElement)[0],
    controller: {
      register: callback => handlers.push(callback),
      zoomToFit: () => zoomToFit(true),
      zoom1to1: () => zoomToFit(false),
      is1to1: () => !applyAutoScale
    }
  }));
}
