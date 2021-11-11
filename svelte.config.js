import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';

import pkg from './package.json';

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    // Use static adapter
    // https://github.com/sveltejs/kit/tree/master/packages/adapter-static
    adapter: adapterStatic({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    paths: {
      // By default project name is used as a base path, read more:
      // https://github.com/sveltejs/kit/tree/master/packages/adapter-static#github-pages
      base: isDev ? '' : pkg.name,
    },
  },
};

export default config;
