var fileProcessing = require('./controllers/api/fileprocessing');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.get('/api/upload', fileProcessing.upload);
};