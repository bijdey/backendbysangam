const express =require('express')
const app= express();
const port=3000;


//what we can do with app like app.set, app.get, app.post, app.post, app.use, etc ...
//application level settings
app.set('view engine','ejs')

//routing
app.get('/',(req,res)=>{
    res.send('home page')
})

app.post('/api/data',(req,res)=>{
    res.json({
        message: 'data received',
        data: req.body
    })
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('something went wrong')
}
)


