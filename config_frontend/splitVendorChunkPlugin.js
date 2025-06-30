/*
Copyright 2025 The Tekton Authors
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

const CSS_LANGS_RE =
  /\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/;
const isCSSRequest = request => CSS_LANGS_RE.test(request);

class SplitVendorChunkCache {
  cache = null;

  constructor() {
    this.cache = new Map();
  }

  reset() {
    this.cache = new Map();
  }
}

function isInNodeModules(id) {
  return id.includes('node_modules');
}

function staticImportedByEntry(id, getModuleInfo, cache, importStack = []) {
  if (cache.has(id)) {
    return cache.get(id);
  }
  if (importStack.includes(id)) {
    // circular deps!
    cache.set(id, false);
    return false;
  }
  const mod = getModuleInfo(id);
  if (!mod) {
    cache.set(id, false);
    return false;
  }

  if (mod.isEntry) {
    cache.set(id, true);
    return true;
  }
  const someImporterIs = mod.importers.some(importer =>
    staticImportedByEntry(
      importer,
      getModuleInfo,
      cache,
      importStack.concat(id)
    )
  );
  cache.set(id, someImporterIs);
  return someImporterIs;
}

function splitVendorChunk() {
  const cache = new SplitVendorChunkCache();
  return (id, { getModuleInfo }) => {
    if (
      isInNodeModules(id) &&
      !isCSSRequest(id) &&
      staticImportedByEntry(id, getModuleInfo, cache.cache)
    ) {
      return 'vendor';
    }
    return undefined;
  };
}

export default function splitVendorChunkPlugin() {
  const caches = [];
  function createSplitVendorChunk() {
    const cache = new SplitVendorChunkCache();
    caches.push(cache);
    return splitVendorChunk({ cache });
  }
  return {
    name: 'vite:split-vendor-chunk',
    config(config) {
      return {
        build: {
          rollupOptions: {
            output: {
              manualChunks: createSplitVendorChunk({}, config)
            }
          }
        }
      };
    },
    buildStart() {
      caches.forEach(cache => cache.reset());
    }
  };
}
