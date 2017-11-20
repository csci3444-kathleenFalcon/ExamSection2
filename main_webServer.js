/**
 * A web nodeJS app listening port 8014, built using express + ejs templates + bootstrap for style definitions that serves 3 urls 
 * 
 * Dependencies; node installed, express and ejs npm packages installed
 * 
 * Start the app
 * node hello_express_usingTemplateengine_ejs
 */
var express = require('express');
const SquareJS = require('./src/common/util/math/mySquare');
const CubeJS = require('./src/common/util/math/myCube');
//var apiV2HelpRouter = require('./routes/v2/help');

var app = express();

// NOTE_1 ilker - by default express looks for templates in directory "./views", so I do not need to set "views" like below
// app.set('views', './views'); // specify the views dir
app.set('views', './src/views'); // NOTE since "views" dir is not directly under root of project, have to set it here
// NOTE_2 ilker - due to putting the extension .ejs, I do not have to set "view engine" like below
// app.set('view engine', 'ejs'); // specify template engine
// NOTE_3 ilker - below allows you to use pure html templates ending with extension .html
app.engine('html', require('ejs').renderFile);

// routes
// set root route
app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'CSCI3444' },
        name: 'Kathleen',
        lastname: 'Falcon'
    };
    res.render('./pages/home.ejs', data2template);
});

// set square route
app.get('/square', function(req, res) {
    var data2template = {
        head: { title: 'Square' },
        inputNumber: 2,
        SquareOfNumber: SquareJS.toSquare(2),
    };
    res.render('./pages/square.ejs', data2template);
});

// set cube route
app.get('/cube', function(req, res) {
    var data2template = {
        head: { title: 'Cube' },
        inputNumber: 3,
        CubeOfNumber: CubeJS.toCube(3),
    };
    res.render('./pages/cube.ejs', data2template);
});

// set about route
app.get('/about', function(req, res) {
    // res.status(200).render('about'); // NOTE_4 ilker, if no default "view engine" specified above, this will complain; "No default engine was specied and no extension was provided"
    res.status(200).render('pages/about.html'); // NOTE_3b ilker, this is OK if you had done "app.engine('html', require('ejs').renderFile);" before
});

// set "/api/v1/help" route using "express.Router" that support GET, POST, PUT
var apiV1HelpRouter = express.Router();
apiV1HelpRouter.route('/help')
    .get((request, response) => { response.send('<h3>/api/v1/help got GET - text/html directly returned from server.js</h3>'); })
    .post((request, response) => { response.send('<h3>/api/v1/help got POST - text/html directly returned from server.js</h3>'); })
    .put((request, response) => { response.send('<h3>/api/v1/help got PUT - text/html directly returned from server.js</h3>'); });
app.use('/api/v1', apiV1HelpRouter);
// NOTE ilker, you can test above routes with below; (NOTE -d passes data or dataFile to POST and PUT )
// curl -i "http://localhost:8014/api/v1/help"
// curl -i "http://localhost:8014/api/v1/help" -X GET
// curl -i "http://localhost:8014/api/v1/help" -X POST -d "param1=value1&param2=value2"
// curl -i "http://localhost:8014/api/v1/help" -X PUT  -d "param1=value1&param2=value2"
// curl -i "http://localhost:8014/api/v1/help" -X PUT  -d "@dataFile.txt"
// curl -i "http://localhost:8014/api/v1/help" -X PUT  -d "@dataFile.json"
// curl -i "http://localhost:8014/api/v1/help" -X POST -d '{"param1":"value1", "param2":"value2"}' -H "Content-Type: application/json"

// set "/api/v2/help" route using "express.Router" that support GET, POST, PUT
//app.use('/api/v2', apiV2HelpRouter);

// set everything else to error page
app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(8014, function() {
    console.log(
        'exam project started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});