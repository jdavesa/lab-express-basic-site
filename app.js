const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()

app.use(express.static('public'));

app.get('/home',(request, response, next)=>response.sendFile(__dirname+'/views/home-page.html'))
app.get('/products',(request, response, next)=>response.sendFile(__dirname+'/views/products-page.html'))
app.get('/about',(request, response, next)=>response.sendFile(__dirname+'/views/about-page.html'))


app.listen(3000)