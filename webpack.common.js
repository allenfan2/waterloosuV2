const {resolve} = require('path');

module.exports = {
    entry : ["@babel/polyfill","./index.js"],
    context: resolve(__dirname, 'src'),
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },
            {
              test: /\.(ico|png|jp(e*)g|svg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'images/[name].[ext]',
                  }
                }
              ]
            }
          ]
    }
}