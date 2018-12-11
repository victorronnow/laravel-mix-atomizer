# Laravel Mix Atomizer
Laravel Mix extension for Atomic CSS support.

## Usage
Start by installing the extension
```
npm install laravel-mix-atomizer --save-dev
```

Create an `acss.js` config file and place it inside the root directory
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

Require it within your `webpack.mix.js` file
```js
let mix = require('laravel-mix');

require('laravel-mix-atomizer');

mix.sass('resources/assets/sass/default.scss', 'public/css')
   .atomize();
```

Run `npm run dev` to compile everything down.
