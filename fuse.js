const {
  FuseBox,
  WebIndexPlugin,
  SassPlugin,
  CSSPlugin,
  VueComponentPlugin,
} = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  plugins: [
    VueComponentPlugin(),
    WebIndexPlugin({ template: 'src/index.html' }),
    [SassPlugin(), CSSPlugin()],
  ]
})

fuse.dev()
fuse.bundle('app').hmr().watch()
  .instructions(`>index.js`)

fuse.run()
