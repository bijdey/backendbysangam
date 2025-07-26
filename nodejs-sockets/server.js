
const express= require('express')
const http= require('http')
const socketIo= require('socket.io')

const app= express()

//create the http server
const server= http.createServer(app)


//initiate socket.io and then attach this to t he http server
const io= socketIo(server)

app.use(express.static('public'))

const users= new Set()