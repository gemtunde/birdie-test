import mongoose from 'mongoose';

const {Schema} = mongoose
const {ObjectId} = mongoose.Schema

const recordSchema = new Schema({
    title : {
        type: String,
        required : "Title is required",
    },
    description : {
        type: String,
        required : "Desription is required",
    },
    observation : {
        type: String,
        },
    price : {
        type: Number,
        required : "Price is required",
        trim:true,
    },
    postedBy : {
        type: ObjectId,
        ref:"User",
    },
    user : {
        type: ObjectId,
        ref:"User",
    },
    image : {
        data: Buffer,
        contentType :String,
    },
   
    mood : {
        type: Number,
       
    },
   
},
{timestamps : true}
);

export default mongoose.model('Record', recordSchema);



