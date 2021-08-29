import PostMessage from "../models/PostMessage.js";

export const getPosts = async(req, res) => {
    try{
        const response = await PostMessage.find();
        res.status(200).json(response);
    }catch(error){
        res.send(404).json({message: error.message})
    }
}

