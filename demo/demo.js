var express = require('express');
var counter = require('./counter')

var app = express();

app.configure(function() {

    //設定靜態檔案所在目錄
    app.use(express.static(__dirname + './public'));

    //啟用 POST
    app.use(express.bodyParser());

    //啟用路由機制
    app.use(app.router);

    //使用 Jade 模板
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    counter.addStatus("\033[35m[SYSTEM]\033[0m System initialize completed!!");
    counter.status();
});

//index
app.get('/', function(req, res) {
    counter.addVisit();

    res.render('index',{
        visit: counter.getVisit(),
        line: counter.getLineDisplay()
    });
    res.end();
});

//purge console
app.get('/purge', function(req, res) {
    counter.purge();

    res.writeHead(302, {
        'Location': '/'
    });
    res.end();
});

app.post('/addStatus', function(req, res) {
    counter.addStatus(req.body.msg);

    res.writeHead(302, {
        'Location': '/'
    });
    res.end();
});

app.post('/setLines', function(req, res) {
    counter.setLineDisplay(req.body.line);

    res.writeHead(302, {
        'Location': '/'
    });
    res.end();
});

app.listen(8888);
