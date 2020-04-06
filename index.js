const express = require('express')
const app = express();
let route = require('./routes/route')

app.set('view engine','ejs')

app.use(express.static(__dirname+'/public'))

app.get('/home', route.home)
app.get('/category', route.category)
app.get('/contact', route.contact)
app.get('/detail', route.detail)
app.get('/', route.home)

app.listen(3000, function () {
    console.log('Aplikasi sedang berjalan')
})