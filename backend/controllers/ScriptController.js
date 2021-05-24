import axios from 'axios';
import models from '../models';

export default {
    api: async (req,res,next) =>{
        try {
            const reg = await models.Player.find({});
            if(reg.length != 0){
                res.status(200).json({"data": 1});
            }else{
                for (var i = 1; i <= 10; i++) {
                    axios.get(`https://www.easports.com/fifa/ultimate-team/api/fut/item?page=${i}`)
                    .then(function (response) {
                        let page = response.data.page;
                        response.data.items.map(function(data){
                            req.body.firstName = data.firstName.toUpperCase(),
                            req.body.lastName = data.lastName.toUpperCase(),
                            req.body.team = data.club.name.toUpperCase(),
                            req.body.nation = data.nation.name.toUpperCase(),
                            req.body.position = data.position.toUpperCase(),
                            req.body.page = page,
                            models.Player.create(req.body);
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }
                res.status(200).json({"data": 2});
            }
            
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
}