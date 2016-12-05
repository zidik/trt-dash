const webpack = require('webpack');
const path = require('path'); 

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000/',
            'webpack/hot/only-dev-server',
            './src/index.tsx',
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },


    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [path.resolve(__dirname, "src")],
                loaders: ["babel-loader" ,"awesome-typescript-loader"]
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, "src")],
                loaders: 'style!css'
            },
        ],
    },
    resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)

        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        // directories where to look for modules

        extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"],
    },
    devServer: {
        port: 3000,
        hot: true,
        publicPath: "/public/",
    },
};