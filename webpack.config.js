const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'my-loader',
                        options: {
                            text: '二郎神',
                        },
                    },
                ],
            },
        ],
    },
    // 指定 loader 的目录寻找顺序 从左到右  
    resolveLoader: {
        modules: ['node_modules', './src/xmhLoader'],
    },
    devServer: {
        contentBase: './dist',
        overlay: {
            warnings: true,
            errors: true,
        },
        open: true,
    },
}
