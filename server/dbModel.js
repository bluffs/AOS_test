import mongoose from 'mongoose'

const aosSchema = mongoose.Schema({
    email: String,
    password: String
});

export default mongoose.model('aosAuth', aosSchema)