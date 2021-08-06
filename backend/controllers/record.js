import Record from "../models/Record";
import fs from 'fs';
const jwt = require('jsonwebtoken');

export const createRecord =async (req, res) => {
    //console.log('records created')
    // console.log("req fields", req.fields);
    // console.log("req files", req.files);

    try{
        let fields = req.fields;
        let files = req.files;
// console.log(req.headers);
        const { authorization } = req.headers;
        let token = authorization.split(" ")[1];

        if(!token){
            return res.status(400).json({ 
                type : "error",
                message : "Bad Request"
            })
        }

        return jwt.verify(token,process.env.JWT_SECRET,(err,decoded) => {
           if(err)return res.status(500).json(err)
        //    console.log(decoded);
           const { _id } = decoded;
        //initiate fields
        let record = new Record({postedBy : _id,...fields});

        //handle image
        if(files.image){
            record.image.data = fs.readFileSync(files.image.path);
            record.image.contentType = files.image.type;
        }

        record.save((err, result) => {
            if(err){
                console.log('err saving records', err);
                res.status(400).send('error saving recored details');
            }
            res.status(200).json(result);
        })

        })        
        // console.log(claim);
        // console.log(fields);


    }
    catch(err){
         console.log(err, 'err saving files')}
        res.status(400).json({
            err: err.message,
        })
        }

        //to query the db and records to the frontend
    export const records = async (req, res) => {
        let all =await Record.find({})
        .limit(10)
        .select("-image.data")
        .populate("postedBy", "_id name")
        .populate("user", "_id name")
        .exec();
        console.log(all);
        res.json(all);

    }












