import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import filesize from 'rollup-plugin-filesize'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import pkg from './package.json'

const env = process.env.BUILD !== '' ? JSON.stringify(process.env.BUILD) : 'development'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: 'inline',
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: 'inline',
    },
  ],
  plugins: [
    peerDepsExternal(),
    replace({
      'process.env.NODE_ENV': env,
      'process.env.PACKAGE_ENV': env,
      'process.env.PACKAGE_VERSION': JSON.stringify(pkg.version),
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: ['node_modules', 'src'],
      },
    }),
    babel({ exclude: 'node_modules/**' }),
    filesize({ showMinifiedSize: false }),
  ],
}
