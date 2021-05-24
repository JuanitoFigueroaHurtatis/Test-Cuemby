import models from '../models';

export default {
    team: async (req,res,next) =>{
        try {
            const reg=await models.Player.find({$and:[{'team':req.body.team.toUpperCase()},{'page':req.body.page}]},{createdAt:0});
            res.status(200).json({"Players": reg});
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },

    players: async (req,res,next) =>{
        try {
            const reg=await models.Player.find({$and:[{'firstName':{'$regex' : req.query.search.toUpperCase(), '$options' : 'i'}},{'page':req.query.page}]},{createdAt:0})
            .sort( { firstName: req.query.order } );
            res.status(200).json({"Players": reg});
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
}