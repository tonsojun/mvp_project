module.exports = options => {
  return {
    entry: './index.js',//takes in entry.js and outputs to bundle.js
    output: {
      filename: 'bundle.js',
    },
    module: { // specifying a new rule for loading .js files.
      rules: [ // we configure webpack to load all .js files with the babel-loader, so that files are transformed into browser safe JS.
        {
          test:/.js$/, // will need to change to jsx Tanner dime
          exclude: /node_modules/, // we exclude node_modules, since the libraries we install here should already be complied by the library authors, and bc babel can get slow when watching too many files at once.
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true, // we specify cache directory option to improve performance by cahsing compiled files.
              },
            },
          ],
        },
      ],
    },
  }
}

// look at the webpack config from FSR compare to make sure I have everything
// take a close look at path