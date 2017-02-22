var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, '/bower_components')))
app.listen(port)

console.log('start at ' + port )

//index page
app.get('/', function(req, res) {
    res.render('index', {
        title: '首页',
        movies: [{
            title: '机械战警',
            _id: 1,
            poser: 'http://www.baidu.com'
        },{
            title: '机械战警',
            _id: 1,
            poser: 'http://www.baidu.com'
        },{
            title: '机械战警',
            _id: 1,
            poser: 'http://www.baidu.com'
        },{
            title: '机械战警',
            _id: 1,
            poser: 'http://www.baidu.com'
        }
        ]
    })
})

//list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: '列表'
    })
})

//detail page
app.get('/admin/detail', function(req, res) {
    res.render('detail', {
        title: '详情',
        movie: {
            doctor: "asdf",
            country: 'America',
            title: '机械战警',
            year: 2014,
            poster: 'http://www.baidu.com',
            language: '英语', 
            flash: 'http://www.baidu.com',
            summary: '简介'
        }
    })
})
