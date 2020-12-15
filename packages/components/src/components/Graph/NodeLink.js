/*
Copyright 2019-2020 The Tekton Authors
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
/* istanbul ignore file */
import React from 'react';
import { path as d3Path } from 'd3-path';

const NodeLink = ({ link }) => {
  const section = link.sections[0];
  const { bendPoints, endPoint, startPoint } = section;
  const path = d3Path();

  path.moveTo(startPoint.x, startPoint.y);
  if (bendPoints) {
    const [controlPoint1, controlPoint2] = bendPoints;
    path.bezierCurveTo(
      controlPoint1.x,
      controlPoint1.y,
      controlPoint2.x,
      controlPoint2.y,
      endPoint.x - 1,
      endPoint.y
    );
  } else {
    path.lineTo(endPoint.x - 1, endPoint.y); // stop short to prevent it showing around the arrow tip
  }

  return (
    <path strokeWidth={1} fill="none" strokeOpacity={1} d={path.toString()} />
  );
};

export default NodeLink;
