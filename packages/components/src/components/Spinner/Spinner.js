/*
Copyright 2019-2022 The Tekton Authors
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

import React from 'react';

export default function Spinner({ children, className }) {
  return (
    <svg
      aria-hidden="true"
      className={`tkn--spinner ${className}`}
      fill="currentColor"
      focusable="false"
      height="20"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10H6.78A11 11 0 0127 16h2A13 13 0 006 7.68V4H4v8h8zM20 22h5.22A11 11 0 015 16H3a13 13 0 0023 8.32V28h2V20H20z"
        transform="scale (-1, 1)"
        transform-origin="center"
      />
      {children}
    </svg>
  );
}
