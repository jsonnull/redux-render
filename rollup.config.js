import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'

const env = process.env.NODE_ENV

const config = {
  input: 'src/index.js',
  external: ['react', 'redux'],
  globals: {
    react: 'React',
    redux: 'Redux'
  },
  output: {
    format: 'umd'
  },
  name: 'ReduxRender',
  plugins: [
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs()
  ]
}

export default config
