# Laravel Mix Atomizer
Laravel Mix extension for Atomic CSS support.

## Usage
1. Start by installing the extension
```
npm install laravel-mix-atomizer --save-dev
```

2. Create an `acss.js` config file and place it inside the root directory
#### Note: the destination file is needed in this file
```js
module.exports = {
    cssDest: './resources/utilities.css'
    ...
}
```

3. Require the package within your `webpack.mix.js` file
```js
let mix = require('laravel-mix');

require('laravel-mix-atomizer');

mix.atomize('path/to/html/root' /* default is 'public' */);
```

4. Run `npm run dev` to compile everything down.
