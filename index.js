let mix = require('laravel-mix');
let path = require('path');

class Atomizer {
    register(configPath = './acss.js') {
        this.configPath = configPath;
    }

    webpackRules() {
        return [
            {
                test: /\.(html)$/,
                loader: 'html-loader'
            },
            {
                test: /\.(html)$/,
                exclude: /(node_modules)/,
                loader: 'webpack-atomizer-loader',
                query: {
                    configPath: path.resolve(this.configPath)
                }
            }
        ]
    }
}

mix.extend('atomize', new Atomizer);
