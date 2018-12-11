# Laravel Mix Atomizer
Laravel Mix extension for Atomic CSS support.

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

#### 3. Create an `index.js` file and place it inside the root directory and import the html files
```js
import html from './public/index.html'
import html from './public/about.html'
...
```

#### 3. Require it within your `webpack.mix.js` file
```js
let mix = require('laravel-mix');

require('laravel-mix-atomizer');

mix.sass('resources/assets/sass/default.scss', 'public/css')
   .atomize();
```

#### 4. Run `npm run dev` to compile everything down.
