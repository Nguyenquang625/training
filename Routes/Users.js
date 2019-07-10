const express = require('express');
const AuthenMiddlware = require('../App/Middlewares/AuthMiddleware');
const LogoutController = require('../App/Controllers/Http/LogoutController');
const UserProfileController = require('../App/Controllers/Http/UserProfileController');
const router = express.Router();

router.use((req,res,next)=>{
    AuthenMiddlware.auth({req,res,next});
})
router.post('/logout',(req,res,next)=>{
    LogoutController.logOut({req,res,next});
})
router.post('/update',(req,res,next)=>{
    UserProfileController.update({req,res,next});
})
module.exports = router;