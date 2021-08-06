
import User from "../models/User";



        //to query the db and records to the frontend
    export const users = async (req, res) => {
        let all =await User.find({isAdmin : false})  
        .populate("postedBy", "_id name")
        .populate("user", "_id name")
        console.log(all);
        res.json(all);

    }












