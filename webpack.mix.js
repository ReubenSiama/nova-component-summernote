let mix = require("laravel-mix");
let webpack = require("webpack");
mix
  .js("resources/js/field.js", "dist/js")
  .sass("resources/sass/field.scss", "dist/css")
  .webpackConfig({
    resolve: {
      symlinks: false
    },
    plugins: [new webpack.IgnorePlugin(/^codemirror$/)]
  });

mix.autoload({
  jquery: ["$", "window.jQuery", "jQuery"],
  vue: ["Vue", "window.Vue"]
});
