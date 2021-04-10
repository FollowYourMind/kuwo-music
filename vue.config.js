const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options"];

chromeName.forEach(name => {
    pagesObj[name] = {
        entry: `src/${name}/index.js`,
        template: "public/index.html",
        filename: `${name}.html`
    };
});

const plugins =
    process.env.NODE_ENV === "production"
        ? [
            {
                from: path.resolve("src/manifest.production.json"),
                to: `${path.resolve("dist")}/manifest.json`
            }
        ]
        : [
            {
                from: path.resolve("src/manifest.development.json"),
                to: `${path.resolve("dist")}/manifest.json`
            }
        ];

module.exports = {
    pages: pagesObj,
    configureWebpack: {
        entry: {
            background: './src/background/background.js',
            content: './src/content/content.js',
        },
        output: {
            filename: 'js/[name].js'
        },
        plugins: [CopyWebpackPlugin(plugins)]
    }
};
