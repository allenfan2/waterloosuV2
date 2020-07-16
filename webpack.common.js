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
            }
          ]
    }
}