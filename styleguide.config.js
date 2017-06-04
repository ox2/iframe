const path = require('path');

module.exports = {
  title: '@ox2/iframe',
  serverPort: 55002,
  styleguideDir: './docs',
  skipComponentsWithoutExample: true,
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  require: [
    '@ox2/css-font-roboto-condensed',
    '@ox2/css-font-roboto',
    '@ox2/ycss',
  ],
  sections: [
    {
      name: 'Get Started',
      sections: [
        {
          name: 'About',
          content: './docs/src/introduction.md',
        },
        {
          name: 'Installation',
          content: './docs/src/installation.md',
        },
        {
          name: 'Usage',
          content: './docs/src/usage.md',
        },
      ],
    },
    {
      name: 'Components',
      components: 'src/**/*.js',
    },
    {
      name: 'History',
      content: './CHANGELOG.md',
    },
    {
      name: 'License',
      content: './LICENSE',
    },
  ],
  getExampleFilename: componentpath =>
    componentpath.replace(/\.js$/, '.examples.md'),
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, '.js');
    const componentPathFixed = componentPath.replace(/src\//i, '');
    const dir = path.dirname(componentPathFixed);
    return `import ${name} from '@ox2/iframe/${dir}';`;
  },
};
