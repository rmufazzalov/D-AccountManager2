const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))//указываем статическую папку, чтоб стили работали, картинки, видео


app.get('/', (req, res) => {
    res.render('index12')
})
app.get('/index12.html', (req, res) => {
    res.render('index12')
})
app.get('/about12.html', (req, res) => {
    res.render('about12')
})
app.get('/404.html', (req, res) => {
    res.render('404')
})


app.get('/user/:username', (req, res) => { //после : создаём динамические параметры
    let data = { username: req.params.username, hobbies: ['Cinema', 'PC gaming', 'Fishing'] }
    res.render('user', data)
    //используем динамические параметры (http://localhost:3000/user/test)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
})