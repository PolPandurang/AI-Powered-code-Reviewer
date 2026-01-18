const aiService = require('../services/ai.services')

exports.getReview= async(req,res)=>{
    const code =req.body.code;

    if(!code){
        return res.statue(400).send("prompt is required")
    }
    const response = await aiService(code);
    res.send(response);
} 