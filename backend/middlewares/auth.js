export default {
    verify: async (req,res,next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'No Autorizado'
            });
        }else{
            next();
        }
    },
}