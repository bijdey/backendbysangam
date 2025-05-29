//example of routes


const express= require('express')
const app= express()
const port=3000
app.get('/', (req,res)=>{
    res.send('welcome to my home page')
})

//to get all products 

app.get('/products', (req,res)=>{
    const products=[
        {
            id:1,
            label:'Product 1'
        }, {
            id:2,
            label:'Product 2'
        }, {
            id:3,
            label:'Product 3'
        }
    ]
    res.send(products)
})

//GET A SINGLE PRODUCT examplet product/2

app.get('/products/:id', (req,res)=>{ 
    const productId = parseInt(req.params.id)
    console.log(req.params)

      const products=[
        {
            id:1,
            label:'Product 1'
        }, {
            id:2,
            label:'Product 2'
        }, {
            id:3,
            label:'Product 3'
        }
    ]
    const getSingleProduct= products.find(prod=> prod.id === productId)
    if(getSingleProduct){
        res.json(getSingleProduct)

    }
    else{
        res.status(404).send('Product is not found')
    }

})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));