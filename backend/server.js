
import express from "express";
import {readdirSync} from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//db connection
mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology : true, 
    useNewUrlParser : true,
    useFindAndModify : false,
    useCreateIndex : true,
})
.then(()=>console.log('success db'))
.catch((err)=>console.log(err, 'error connection'));

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes middleware
readdirSync('./routes').map((r)=>app.use('/api', require(`./routes/${r}`)));
//app.use('/api', router );

const port = process.env.PORT || 8000;

app.listen(port, 
    ()=> console.log(`running on port ${port}`))