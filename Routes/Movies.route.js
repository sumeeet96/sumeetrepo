const express = require ('express')
const router = express.Router();
const Movies = require('../API_Models/Movies.model')




//will return list of movies 


router.get('/',async(req,res,next) => {
    try {
        const movies = new Movies(req.body)
        const results = await Movies.find({},{__v:0});/// 
        res.send(results)
        
    } catch (error) {
        
        console.log(error.message);
    }
});


//adding items to database 

router.post('/',async(req,res,next) => {
    try {
        const movies = new Movies(req.body);
        const result  = await movies.save()
        res.send(result)
    } catch (error) {
        console.log(error.message);
        
    }
    const movies = new Movies(req.body)

})
/// Finding by id 

router.get('/:id',async(req,res,next)=> {
    const id = req.params.id
    try {
        const movies = new Movies (req.body)
        const result = await Movies.findById(id)
        console.log("found")
        res.send(result)
        
    } catch (error) {
        console.log(error.message);
    }
});




///updating the database


router.patch('/:id',async(req,res,next)=> {
    
    try {
        const id = req.params.id;
        const updates = req.body
        const options = {new:true}
        const result = await Movies.findByIdAndUpdate(id,updates,options)
        
        res.send(result)

    } catch (error) {
        console.log(error.message)
        
    }
});


///Deleting from the database

router.delete('/:id',async(req,res,next)=> {
    const id = req.params.id
    try {
        const result = await Movies.findByIdAndDelete(id)
        res.send(result)
    } catch (error) {
        console.log(error.message)
        
    }
});
module.exports = router;