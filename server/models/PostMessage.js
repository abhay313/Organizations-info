import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    Name: String,
    website: String,
    Location: String,
    Zipcode: String,
    Description: String,
    Owner: String,
    Established: Number
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;