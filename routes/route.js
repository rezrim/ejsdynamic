exports.home = function (req,res) {
    res.render('home', {
        page : 'index'
    })
}

exports.category = function (req,res) {
    res.render('home',{
        page : 'category'
    })
}

exports.contact = function (req,res) {
    res.render('home',{
        page : 'contact'
    })
}

exports.detail = function (req,res) {
    res.render('home',{
        page : 'detail'
    })
}