const { defineConfig } = require('@vue/cli-service');
const BASE_URL = process.env.NODE_ENV === 'production' ? 'Utility' : '/';

module.exports = defineConfig({
    transpileDependencies: true,
    runtimeCompiler: true,
    devServer: {
        hot: true,
    },
    publicPath: BASE_URL,
});
