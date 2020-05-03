const express =require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());

///mongodb+srv://sumeeet96:<password>@cluster0-xkn57.mongodb.net/test?retryWrites=true&w=majority
///user name : sumeeet96
///password :f6MhalxaBkfERMGI

mongoose
    .connect('mongodb+srv://cluster0-xkn57.mongodb.net/', {
    dbName:'api_project',
    user:'sumeeet96',
    pass:'f6MhalxaBkfERMGI',
    useNewUrlParser : true,
    useUnifiedTopology:true,
    useFindAndModify: false
}
)
.then(() => {
    console.log('MongoDb Database  connected...')
});

// app.all('/test/',(req,res)=>{
//     console.log(req.body);
//     res.send(req.body)
// });

const MoviesRoute = require('./Routes/Movies.route')
app.use('/movies',MoviesRoute)

app.use((req,res,next)=> {
    const err= new Error("Not found")
    err.status = 404
    next(err)

});

app.use((err,req,res,next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message : err.message
        }
        
    })
})

app.listen (3000, () => {
    console.log('Starting server at localhost:3000....!')
})
