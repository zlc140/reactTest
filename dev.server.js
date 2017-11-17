var opn = require('opn')
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.dev');
var compiler = webpack(config);
var app = express()
// var proxy = [{
//     path:'/*/*',
if(!process.env.NODE_ENV){
  process.env.NODE_ENV = 'development'
}
// 
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  hot:true,
	stats: {
		colors: true,
	}
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log:() => {},
  heartbeat: 2000
});

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(devMiddleware)

app.use(hotMiddleware)
app.get('*',function(req,res) {
    res.sendFile(__dirname+'/index.html')
})
var port = 8069
var uri = 'http://localhost:' + port
var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

devMiddleware.waitUntilValid(() => {
    // when env is testing, don't need open it
    if ( process.env.NODE_ENV === 'development') {
      console.log('> Listening at ' + uri + '\n' )
      console.log(process.env.NODE_ENV)
      opn(uri)
    }
    _resolve()
  })


var server = app.listen(port,function() {
    console.log('正常打开8069端口')
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}