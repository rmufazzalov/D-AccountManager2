const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/index.html', (req, res) => {
    res.render('index')
})

app.get('/mon/:id/:temp1/:hum1/:temp2/:hum2', (req, res) => {
    let data = { deviceID: req.params.id, temperature1: req.params.temp1, temperature2: req.params.temp2, humidity1: req.params.hum1, humidity2: req.params.hum2 }
    // let data = { deviceID: 1, temperature1: 23, temperature2: 24, humidity1: 41, humidity2: 42 }
    res.render('mon', data)

})



const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
})