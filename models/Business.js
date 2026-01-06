import mongoose from 'mongoose';


const businessSchema = new mongoose.Schema({
    businessName: String,
    ownerName: String,
    telebirrAccount: String,
    cbeAccount: String,
    verificationCode: {
        type: String,
        unique: true,
        default: () => Math.random().toString(36).substring(2, 9)
    }
});


export default mongoose.model('Business', businessSchema);