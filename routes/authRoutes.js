import express from "express";
<<<<<<< HEAD
=======
import { signupUser, signinUser } from "../controllers/authController.js";
>>>>>>> 9c5e4f4 (test)

const router = express.Router();

router.post("/sign-up", signupUser);
router.post("/sign-in", signinUser);

export default router;