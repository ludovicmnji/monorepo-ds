import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

import pkg from './package.json';

/* const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const makeExternalPredicate = externalsArr => {
  if (externalsArr.length === 0) {
    return () => false;
  }
  const externalPattern = new RegExp(`^(${externalsArr.join('|')})($|/)`);
  return id => externalPattern.test(id);
}; */

const isProdBuild = process.env.BUILD === 'production';

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.BUILD || 'development'),
  }),
  resolve({
    customResolveOptions: {
      moduleDirectory: ['node_modules', 'src'],
    },
  }),
  commonjs({ include: 'node_modules/**' }),
  babel({ exclude: 'node_modules/**' }),
];

if (isProdBuild) {
  plugins.push(uglify());
} else {
  console.log('Rollup.js is building for non-production bundle (non-optimized)')
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: ['styled-components', 'react'],
  plugins,
};
