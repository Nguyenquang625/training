const TokenModel = require('../../Models/TokenModel');
class LogoutController{
    constructor(){
        this.tokenModel = TokenModel
    }
    async logOut({req,res,next}){
        const {headers} = req;
        const token = headers.authorization;
        const tokenC = await this.tokenModel.query().where('token',token).first();
        if(!tokenC){
            res.json({
                message:'Token_not_found'
            })
        }
        const updateStatusToken= {
            status : 0
        }
        const updateST = await this.tokenModel.query().update(updateStatusToken)
        .where('token', token).first();
        res.json({
            message:'logout_success'
        })
    }
}

module.exports = new LogoutController;