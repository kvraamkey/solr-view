export default {
    mount: {
        public: '/',
        src: '/dist'
    },
    alias: {
        '@src': './src',
        '@components': './src/_components',
        '@pages': './src/_pages',
    },
    plugins: [
        '@snowpack/plugin-svelte', '@snowpack/plugin-dotenv', '@snowpack/plugin-postcss'
    ],
    routes: [],
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2018',
        sourcemap: false
    },
    packageOptions: {},
    devOptions: {
        open: "none",
        tailwindConfig: './tailwind.config.js'
    },
    buildOptions: {}
}
