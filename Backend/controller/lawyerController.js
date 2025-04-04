import LawyerRequest from "../Models/LawyerRequestModel.js";


export const lawyerRequestForm = async(req,res)=>{
    try {
        const newRequest = new LawyerRequest(req.body)
        await newRequest.save()
        res.status(201).json({message:"Request Submitted successfully"})
    } catch (error) {
        res.status(500).json({error:"Submission Failed" , details: error.message})
    }
}