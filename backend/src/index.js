const express = require( 'express' );
const mongoose = require( 'mongoose' );
const routes = require( './routes');

const app = express();

mongoose.connect('mongodb+srv://move:ms&l@cluster0-8q706.mongodb.net/move?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology : true,   
})

app.use( express.json( ) );
app.use(routes);

app.listen(3333);


