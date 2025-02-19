const {resolve} = require("node:path");
module.exports = {
    entry: './index.ts',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.(ts)$/, use: 'babel-loader' }
        ]
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    }
}