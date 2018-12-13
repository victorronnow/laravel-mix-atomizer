let mix = require('laravel-mix');
let path = require('path');
let glob = require('glob');

class Atomizer {
    dependencies() {
        return [
            'webpack-atomizer-loader'
        ];
    }

    register(htmlRoot = 'public', configPath = './acss.js') {
        this.htmlRoot = htmlRoot;
    }

    webpackConfig(config) {
        let filePaths = glob.sync(`${this.htmlRoot}/**/*.html`, { realpath: true });
        config.entry.mix = config.entry.mix.concat(filePaths);
    }

    webpackRules() {
        return [
            {
                test: /\.(html)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'webpack-atomizer-loader',
                    options: {
                        configPath: path.resolve(this.configPath)
                    }
                }
            }
        ]
    }
}

mix.extend('atomize', new Atomizer());
