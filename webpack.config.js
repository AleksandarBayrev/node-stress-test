const path = require('path');

module.exports = {
    entry: './build/ts/index.js',
    target: 'node',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'node-stress-test.js'
    }
}