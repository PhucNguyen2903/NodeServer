
class NewsController {
    //[GET] /news 
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    Show(req, res) {
        res.send('news Detail');
    }
}

module.exports = new NewsController;