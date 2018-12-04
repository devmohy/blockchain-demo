const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
 
global.__basedir = __dirname;

const db = require('./api/config/db.config.js');
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

require('./api/routes/citizen.route.js')(app);


// Create a Server
var server = app.listen(4000, function () {
 
  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

// // Create a Server
// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/a') {
//       app.render(req, res, '/b', query)
//     } else if (pathname === '/b') {
//       app.render(req, res, '/a', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(3000, err => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:4000')
//   })
// })