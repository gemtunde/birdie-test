
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const {Schema }= mongoose;

const userSchema = new Schema({
    name:{
        type: 'String',
        required : 'Name is required',
        trim:true
        },
    email:{
        type: 'String',
        required : 'Email is required',
        trim:true,
        unique:true
        },
    password:{
        type: 'String',
        required : 'Password is required',
        min:5,
        max:20
        },
    isAdmin:{
        type: 'Boolean',
        default: false,
        },
    stripe_account_id : '',
    stripe_seller: {},
    stripeSession: {},
},
{timestamps: true}
);

//hash user password
userSchema.pre("save", function(next){
    let user = this;

    if(user.isModified('password')){
        return bcrypt.hash(user.password, 12, function(err, hash){
            if(err){
                console.log('bcrypt has err', err);
                return next(err);
            }
            user.password = hash ;
            return next();
        });        
    }
    else{
        return next();
    }
});

userSchema.methods.comparePassword = function(password,next){
    bcrypt.compare(password, this.password, function(err, match){
        if(err){
            console.log("error login password", err);
           return next(err, false);
        }
        //if no error
        console.log("Match Password", match);
        return next(null, match);
    });
};

export default mongoose.model('User', userSchema)

