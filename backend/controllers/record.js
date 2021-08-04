import Record from "../models/Record";
import fs from 'fs';

export const createRecord =async (req, res) => {
    //console.log('records created')
    // console.log("req fields", req.fields);
    // console.log("req files", req.files);

    try{
        let fields = req.fields;
        let files = req.files;

        //initiate fields
        let record = new Record(fields);

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


    }
    catch(err){
         console.log(err, 'err saving files')}
        res.status(400).json({
            err: err.message,
        })
        }














