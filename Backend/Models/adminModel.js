import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema, model } = mongoose;

const adminSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  });

  
  
  // Create the User model
  const Admin = model("Admin", adminSchema);
  
  // Export the User model
  export default Admin;
  