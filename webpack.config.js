const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]/,
        include: SRC_DIR,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            ["react-css-modules", {
              "filetypes": {
                ".scss": {
                  "syntax": "postcss-scss"
                }
              }
            }]
          ]
        },
      },
      {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,    
                  modules: true,
                  sourceMap: true,
                  localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                }
              },
              'sass-loader'
            ]
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
      }]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};