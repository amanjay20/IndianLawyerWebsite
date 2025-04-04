import { Router } from "express";
import { lawyerRequestForm } from "../controller/lawyerController.js";


const router = Router()

//submit form
router.post('/request' , lawyerRequestForm)

export default router