const tektonAPI = /tekton.dev/;

// export function isTask(resource) {
//   return (
//     resource && tektonAPI.test(resource.apiVersion) && resource.kind === 'Task'
//   );
// }

export function isPipeline(resource) {
  return (
    resource &&
    tektonAPI.test(resource.apiVersion) &&
    resource.spec !== undefined &&
    resource.kind === 'Pipeline' &&
    resource.spec.tasks !== undefined
  );
}

export function isPipelineRun(resource) {
  return (
    tektonAPI.test(resource.apiVersion) &&
    resource.spec !== undefined &&
    resource.kind === 'PipelineRun' &&
    resource.spec.serviceAccount !== undefined &&
    resource.spec.pipelineRef !== undefined
  );
}
