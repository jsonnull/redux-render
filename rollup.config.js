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
  name: 'ReduxRender',
  plugins: []
}

if (env === 'es') {
  config.output = {
    format: 'es'
  }
  config.plugins.push(babel())
}

if (env === 'development' || env === 'production') {
  config.output = {
    format: 'umd'
  }
  config.plugins.push(
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs()
  )
}

export default config
