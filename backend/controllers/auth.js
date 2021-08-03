
import User from "../models/User";
import jwt from 'jsonwebtoken';

  //register
  export const register = async(req, res) => {
    const {name, email, password} = req.body
    //console.log(name, email, password);

      //vaidate name and password
    if(!name) return res.status(400).send('Name is required');
    if(!password) return res.status(400).send('Password is required');
    if(password.length < 6 ) return res.status(400).send('Password must be greater than 6 charaters');
    
    //check if user exists
    let userExist = await User.findOne({email}).exec();    
    if(userExist) return res.status(400).send('email exists');

    //register user
    const user = new User(req.body) ;
    try{
        await user.save();
        console.log('user created',user);
        return res.json({ok:true});

    }
    catch(err){
      console.log('create failed', err);
      return res.status(400).send('error, try again');
    } 
  }


  //login controller

  export const login = async (req, res) => {
      const {email, password} = req.body;
      // console.log(email, password);
      // res.status(200).send(req.body);
      try{
        //chec if user exists
        let user = await User.findOne({email}).exec();
        //console.log('user exists', user);
        //return res.status(200).send(user);
        if(!user) return res.status(400).send('user with email not found');
        
        //compare password
        user.comparePassword(password, (err, match)=> {
          if(!match || err) return res.status(400).send('password mis-match')
          
          //GENERATE TOKEN
          let token = jwt.sign({_id : user.id}, process.env.JWT_SECRET, {
            expiresIn:'7d',
          });

          return res.json({token, user :{
            _id : user._id,
            name : user.name,
            email : user.email,
            createdAt : user.createdAt,
            updatedAt : user.updatedAt,

          }});
        })
      }
      catch(err){
        console.log(err, 'login failed');
        res.status(400).send('login error')
      }
  }


