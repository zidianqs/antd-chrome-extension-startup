module.exports = {
  extends: '@ali/rhino',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src@', './src'],
        ],
      },
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  }
};
