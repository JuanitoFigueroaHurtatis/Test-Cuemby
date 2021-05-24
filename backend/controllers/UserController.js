import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';
export default {
    login: async (req,res,next) => {
        try {
            let user = await models.User.findOne({email:req.body.email,status:1});
            if (user){
                let match = await bcrypt.compare(req.body.password,user.password);
                if (match){
                    let tokenReturn = await token.encode(user._id, user.email, user.name);
                    res.status(200).json({user,tokenReturn});
                } else{
                    res.status(403).send({
                        message: 'Password Incorrect'
                    });
                }
            } else{
                res.status(403).send({
                    message: 'No exist the user'
                });
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}