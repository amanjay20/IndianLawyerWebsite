import { Router } from "express";
import { AcceptedLawyer, AdminLogin, AdminSignup, lawyerRequest, UpdateLawyerStatus } from "../controller/adminController.js";
const router = Router()


//Signup
router.post("/signup" , AdminSignup)

//login
router.post('/login' , AdminLogin)

// Get All Lawyer Requests
router.get('/lawyer-requests' , lawyerRequest)

// Update Lawyer Status
router.patch('/update-status/:id' , UpdateLawyerStatus)

// Get Only Accepted Lawyers for Sidebar
router.get("/accepted-lawyers", AcceptedLawyer)

export default router