var publicAssets = "./assets";
var sourceFiles  = "./gulp/assets";
var reactify     = require("reactify");
var neatPaths    = require("node-neat").includePaths;

module.exports = {
  publicAssets: publicAssets,
  browserSync: {
    files: ['./gulp/**']
  },
  sass: {
    src: sourceFiles + "/stylesheets/**/*.{sass,scss}",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: false,
      imagePath: '/assets/images', // Used by the image-url helper
      includePaths: neatPaths,
      sourcemap: true
    }
  },
  images: {
    src: sourceFiles + "/images/**",
    dest: publicAssets + "/images"
  },
  fonts: {
    src: sourceFiles + "/fonts/**",
    dest: publicAssets + "/fonts"
  },
  iconFont: {
    name: 'Gulp Rails Icons',
    src: sourceFiles + "/icons/*.svg",
    dest: publicAssets + '/fonts',
    sassDest: sourceFiles + '/stylesheets/base',
    template: './gulp/tasks/iconFont/template.sass',
    sassOutputName: '_iconFont.sass',
    fontPath: '/assets/fonts',
    className: 'icon',
    options: {
      fontName: 'gulp-rails-icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    bundleConfigs: [
    {
      entries: sourceFiles + '/javascripts/flexbox.coffee',
      dest: publicAssets + '/javascripts',
      outputName: 'flexbox.js',
      extensions: ['.js','.coffee','.jsx','.js.jsx'],
      transform: [reactify]
    }]
  }
};
