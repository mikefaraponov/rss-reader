import Express              from 'express'
import { Server }           from 'http'
import { join }             from 'path'
import favicon              from 'serve-favicon'
import logger               from 'morgan'
import { json, urlencoded } from 'body-parser'
import Debug                from 'debug'

const app       = Express(),
      debug     = Debug('rss:server'),
      server    = Server(app),
      NODE_ENV  = process.env.NODE_ENV;

const singlePageApplication = 
  (rootDir, pagePath) =>
    (req, res) => 
      res.sendFile(join(rootDir, pagePath))

app
  .use(logger('dev'))
  .use(favicon(join(__dirname, '..', 'static', 'rss.png')))
  .use(json())
  .use(urlencoded({ extended: false }))
  .use(Express.static( join(__dirname, '..', 'static') ))
  .use(singlePageApplication(__dirname, 'index.html'))

server
  .listen(process.env.PORT || 1337, onStart)
  .on('error', onError)
  .on('listening', onListening);


function onStart(err){
    if(!err)
        debug(`Server started!`);
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : `port ${addr.port}`;
  debug('Listening on ' + bind);
}

function onError(err) {
  const { port } = err;
  if (err.syscall !== 'listen') {
    throw err;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (err.code) {
    case 'EACCES':
      debug(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
