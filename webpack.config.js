const path = require("path")

module.exports = {
    mode: 'development',
    entry: './src/main',
    resolve: {
        modules: [path.resolve(__dirname, 'pixi'), 'node_modules']
    },
    watch: true
};
