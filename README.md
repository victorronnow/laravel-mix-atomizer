# Laravel Mix Atomizer
Laravel Mix extension for Atomic CSS support.

## Quick note
*This package is currently under development. It is not recommended to use in production.*

## Usage
#### 1. Start by installing the extension
```
npm install laravel-mix-atomizer --save-dev
```

#### 2. Create an `acss.js` config file and place it inside the root directory
```js
module.exports = {
    cssDest: './main.css',
    options: {
        namespace: '#atomic',
    },
    configs: {
        breakPoints: {
            sm: '@media screen(min-width=750px)',
            md: '@media(min-width=1000px)',
            lg: '@media(min-width=1200px)'
        },
        custom: {
            '1': '1px solid #000',
        },
        classNames: []
    }
}
```

#### 3. Create a `default.js` file
```js
import html from './public/index.html'
import html from './public/about.html'
...
```

#### 3. Require the package within your `webpack.mix.js` file and compile the previous `js` file with mix
```js
let mix = require('laravel-mix');

require('laravel-mix-atomizer');

mix.js('resources/js/default.js', 'public/js')
   .sass('resources/assets/sass/default.scss', 'public/css')
   .atomize();
```

#### 4. Run `npm run dev` to compile everything down.
