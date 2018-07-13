const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');

const app = express();
mongoose.connect('mongodb://localhost:27017/meandb', (err, res) => {
    if(err){
        return console.log(`Error al conectar a la base de datos. ${err}`)        
    }    
    console.log('Conexion a la base de datos correcta')
})

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/', apiRouter);

//static files
app.use(express.static(path.join(__dirname, 'public/dist/users-app')));

app.listen(3000, () => {
    console.log('server is running on 3000');
});