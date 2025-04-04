import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const lawyerRequestSchema = new Schema({
  name: String,
  age: Number,
  experience: String,
  // image: String,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });


   // Create the User model
   const LawyerRequest = model("LawyerRequest", lawyerRequestSchema);
  
   // Export the User model
   export default LawyerRequest;
