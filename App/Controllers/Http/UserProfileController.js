const UserModel = require('../../Models/UserModel');

class UserProfileController{
    constructor(){
        this.userModel = UserModel;
    }
    async update({req,res,next}){
        const {body} = req;
        if(!body.oldPassword || !body.password){
            return res.json({
                message: 'Oldpassword or password is required',
                data: null
            })
        }
        const user = await this.userModel.query().where('username',body.username)
        .where('password', body.oldPassword).first();
        //kiem tra user co trong database chua
        if(!user){
            return res.json({
                message: 'username or password is wrong',
                data: null
            })
        }
        const newPassword ={
            password: body.password
        }
        await this.userModel.query().update(newPassword).where('username',body.username)
        .where('password', body.oldPassword).first();
        res.json({
            message:'update success'
        })
    }
}
module.exports = new UserProfileController();