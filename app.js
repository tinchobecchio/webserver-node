const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

// HBS
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'))

// Rutas
app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Martin Becchio',
        titulo: 'Curso de Node'
    })
})



app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Martin Becchio',
        titulo: 'Curso de Node'
    })
})
app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Martin Becchio',
        titulo: 'Curso de Node'
    })
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})