# Laravel Mix Atomizer
---
Laravel Mix extension for Atomic CSS support.

## Usage
---
Start by installing the extension
```
npm install laravel-mix-atomizer --save-dev
```

Require it within your `webpack.mix.js` file
```
let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix.sass('resources/assets/sass/default.scss', 'public/css')
   .atomize();
```
