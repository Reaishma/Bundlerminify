const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    
    return {
        entry: {
            site: './wwwroot/js/site.js',
            styles: './wwwroot/css/site.css'
        },
        output: {
            path: path.resolve(__dirname, 'wwwroot/dist'),
            filename: isProduction ? '[name].min.js' : '[name].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            ...(isProduction ? [
                new MiniCssExtractPlugin({
                    filename: '[name].min.css'
                })
            ] : [])
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true
                        }
                    }
                })
            ]
        },
        devtool: isProduction ? false : 'source-map',
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }
    };
};