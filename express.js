const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/templates/index.html')
// })

app.get('/', (req, res) => {
    res.render('index')
})

// app.get('/index.html', (req, res) => {
//     res.sendFile(__dirname + '/templates/index.html')
// })

app.get('/index.html', (req, res) => {
    res.render('index')
})

// app.get('/about.html', (req, res) => {
//     res.sendFile(__dirname + '/templates/about.html')
// })

app.get('/about.html', (req, res) => {
    res.render('about')
})

// app.get('/user/:username/:id', (req, res) => { //после : создаём динамические параметры
//     res.send(`User id: ${req.params.id}. Username: ${req.params.username}`)
//     //используем динамические параметры (http://localhost:3000/user/test/1)
// })


app.get('/user/:username', (req, res) => { //после : создаём динамические параметры
    let data = { username: req.params.username, hobbies: ['Cinema', 'PC gaming', 'Fishing'] }
    res.render('user', data)
    //используем динамические параметры (http://localhost:3000/user/test)
})



const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
})