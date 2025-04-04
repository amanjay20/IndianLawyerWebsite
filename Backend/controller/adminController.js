import Admin from "../Models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import LawyerRequest from "../Models/LawyerRequestModel.js";

export const AdminSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // console.log("Signup Request:", { name, email, password });

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log("Hashed Password:", hashedPassword);

        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword
        });
        await newAdmin.save();
        res.status(201).json({ message: "Admin registered Successfully" });

    } catch (error) {
        // console.error("Signup Error:", error);
        res.status(500).json({ message: "Error Registering Admin", error: error.message });
    }
}

export const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log("Login Request:", { email, password });

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: "Email not Found" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        // console.log("Password Match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password" });
        }

        const token = jwt.sign({ adminId: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ message: "Login Successful", token });

    } catch (error) {
        // console.error("Login Error:", error);
        res.status(500).json({ message: "Login Error", error: error.message });
    }
}

export const lawyerRequest = async(req,res)=>{
    try {
        const lawyers = await LawyerRequest.find().sort({createdAt:-1})
        res.json(lawyers)
    } catch (error) {
        res.status(500).json({message:"Failed to fetch lawyer request" , error:error.message})
        
    }
}

export const UpdateLawyerStatus = async(req,res)=>{
    try {
        const {status} = req.body
        await LawyerRequest.findByIdAndUpdate(req.params.id , {status})
        res.json({message:`Lawyer marked as ${status}`})

    } catch (error) {
        res.status(500).json({ message: 'Failed to update status' , error:error.message})
    }
}   

export const AcceptedLawyer = async(req,res)=>{
    try {
        const lawyers = await LawyerRequest.find({ status: 'accepted' });
        res.json(lawyers);
      } catch (err) {
        res.status(500).json({ message: 'Failed to fetch accepted lawyers' });
      }
}