import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Business from "./models/Business.js";
import bcrypt from 'bcrypt';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.post("/api/businesses", async (req, res) => {
    const newBusiness = new Business(req.body);
    await newBusiness.save();
    res.json(newBusiness);
});

app.get("/api/businesses/:code", async (req, res) => {
    const business = await Business.findOne({ verificationCode: req.params.code });
    res.json(business);
});


const PORT = process.env.PORT || 5000;

// 3. Listen on 0.0.0.0 so Render can see the service
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is live on port ${PORT}`);
});