const Product= require('../models/Product')


const getProductStats = async (req, res) => {
    try {

        
        const result = await Product.aggregate([
    // Stage 1: match and find
    {
        $match: {
            inStock: true,
            price: {
                $gte: 100 // this represents greater than or equal to 100
            }
        }
    },

    // Stage 2: group our document
    {
        $group: {
            _id: "$category", //this will search only for category
            avgPrice: {
                $avg: "$price"  //this calculates average
            },
            count: {
                $sum: 1
            }
        }
    }
]);


        res.status(201).json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error('Found error at getProductStats-controller', error);
        res.status(500).json({
            success: false,
            message: 'Found the error at the getProductStats'
        });
    }
};


const getProductAnalysis= async(req,res)=>{
    try {
        const result = await Product.aggregate([
         {
             $match: { category: "Electronics" }
         },
         //
         {
            $group:{
                _id: null,
                totalRevenue: {
                    $sum: "$price"
                },
                averagePrice:{
                    $avg: "$price"
                },
                maxProductPrice:{
                    $max: "$price"
                },
                minProductPrice:{
                    $min: "$price"
                },
                
            }
         }
    ]);
    
    res.status(200).json({
        success: true,
        date: result
    })

        
    } catch (error) {
        console.error('error at getProductanalysis', error)
        res.status(500).json({
            success: false,
            message: 'error at getProductAnalysis'
        })
        
    }
}




const insertSampleProducts= async(req,res)=>{
    try {

        const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["computer", "tech"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running"],
      },
      {
        name: "Novel",
        category: "Books",
        price: 15,
        inStock: true,
        tags: ["fiction", "bestseller"],
      },
    ];


    const result= await Product.insertMany(sampleProducts)
    res.status(201).json({
        success: true,
        data: `Inserted ${result.length} sample products`
    })


        
    } catch (error) {
        console.error('error found at insertSampleProducts-controller', error)
        res.status(500).json({
            success: false,
            message: 'some error occured at insertSampleProducts'
        })
        
    }
}


module.exports={insertSampleProducts, getProductStats, getProductAnalysis}