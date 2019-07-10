const express = require('express');
const AuthenMiddlware = require('../App/Middlewares/AuthMiddleware');
const router = express.Router();

router.use((req,res,next)=>{
    AuthenMiddlware.auth({req,res,next});
})
router.get('/',(req,res,next)=>{
})
module.exports = router;