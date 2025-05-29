const express= require('express')
const app= express()
const port= 3000
const myFirstMiddleware= (req,res,next)=>{
    console.log('this is the first middle ware will run on every request')
     next()   //if  we don't put next then the  the bottom pags will  not  work
}

app.use(myFirstMiddleware)

app.get('/', (req,res)=>{
    res.send('home page')
})

app.get('/about', (req,res)=>{
    res.send('about page')
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})
       