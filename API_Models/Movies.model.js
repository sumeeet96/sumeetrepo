const mongoose =require('mongoose')
const Schema = mongoose.Schema

const MoviesSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required: true
    },
    summary:{
        type:String,
        required: true
    }
})

const Movies = mongoose.model('movies',MoviesSchema)
module.exports = Movies;