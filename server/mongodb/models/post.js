import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  name: { type: String, requried: true },
  prompt: { type: String, requried: true },
  photo: { type: String, requried: true },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
