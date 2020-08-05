import express from 'express';
import open from 'open';
import path from 'path';
import compression from 'compression';

//webpack things...
// import webpack from 'webpack';
// import config from '../webpack.config.dev';

//the const keyword is introduce in es6 not in es5
const app= express();
const port = 3000;

app.use(compression()); 

app.use(express.static('dist'));

// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler,{
//     noInfo : true,
//     publicPath: config.output.publicPath
// }));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../dist/index.html'));
})

app.get('/users',(req,res) => {
    res.json([
    {"id" : 1, "firstName" : "mockName1dist" , "lastName": "mockLast1", "email":"mock1@email.com" },
    {"id" : 2, "firstName" : "mockName2dist" , "lastName": "mockLast2", "email":"mock2@email.com" },
    {"id" : 3, "firstName" : "mockName3dist" , "lastName": "mockLast3", "email":"mock3@email.com" }
    ]);
})

app.listen(port, (err) =>{
    if(err){
    console.log(err)//eslint-disable-line no-console
    }else{
        open("http://localhost:"+port)
    }
});