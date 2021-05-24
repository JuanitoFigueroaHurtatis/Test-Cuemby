import mongoose,{Schema} from 'mongoose';

const playerSchema = new Schema({
    firstName:{type:String, maxlength:60, required:true},
    lastName: {type:String, maxlength:60, required:true},
    team:{type:String, maxlength:30, required:true},
    nation: {type:String, maxlength:30, required:true},
    position: {type:String, maxlength:10, required:true},
    page: {type:Number, required:true},
    createdAt:{type:Date,default:Date.now}
});

const Player = mongoose.model('player',playerSchema);

export default Player;