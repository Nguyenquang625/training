const UserModel = require('../Models/UserModel');
const TokenModel = require('../Models/TokenModel');
const jwt = require('json-web-token')
class AuthService{
    constructor(){
        this.userModel =UserModel;
        this.tokenModel = TokenModel;
    }
    async register(body){
        try{
            if(!body.username || !body.password){
                return {
                    message: 'username or password is required',
                    data: null
                }
            }
            const user = await this.userModel.query().where('username',body.username).first();
            //kiem tra user co trong database chua
            if(user){
                return {
                    message: 'user_is_exist',
                    data: null
                }
            }
            //Phai ma hoa password o day

            //insert database
            //const password = this.hash_password(body.password);
            const password = body.password;
            const dataInsert = {
                username:body.username,
                password,
                name: body.username
            }
            const userInserted = await this.userModel.query().insert(dataInsert);
            let token = jwt.encode(Env.APP_KEY,{
                id:userInserted.id,
                timestamp: new Date().getTime()
            })

            const dataTokenInsert = {
                user_id: userInserted.id,
                token: token.value,
                status: 1
            }
            await this.tokenModel.query().insert(dataTokenInsert);
            return {
                message:'register_success',
                data:token.value
            }

        }catch(e){
            console.log('error : '+ e )
        }
    }
}
module.exports = new AuthService();