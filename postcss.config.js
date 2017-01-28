module.exports = {
  plugins: [
    require('autoprefixer')(
      {
        browsers: [
          'ie >= 11',
          'last 2 ff versions',
          'last 2 Chrome versions',
          'last 2 Safari versions',
          'last 2 iOS versions',
          'Android >= 4.4'
        ]
      }
    ),
    require('precss')(),
    require('postcss-flexbugs-fixes'),
    require('postcss-partial-import')(),
    require('postcss-nested'),
    require('css-mqpacker')({ sort: function (a, b) { return b.localeCompare(a); } })
  ]
}
