# An [Eco](https://github.com/sstephenson/eco) template loader for [webpack](https://github.com/webpack/webpack)

## Usage

### Inline

```js
var template = require('eco!./template.eco');
// => returns a template function
```

### Configuration

You can also add the loader to your `webpack.config.js` file.
```js
module.exports = {
  module: {
    loaders: [
      // Files with the .eco extension will use the eco-loader.
      {test: /\.eco$/, loader: 'eco-loader'}
    ]
  },
  resolve: {
    // .eco added to the default extensions.
    extensions: ['', '.webpack.js', '.web.js', '.js', '.eco']
  }
};
```
After that the template can be loaded without specifying the loader and the .eco
extension.
```
var template = require('./template');
// => returns a template function
```

## License

MIT (http://opensource.org/licenses/MIT)
