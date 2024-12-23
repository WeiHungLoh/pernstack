import express from "express";
<<<<<<< HEAD
// import authRoutes from "./authRoutes.js";
=======
import authRoutes from "./authRoutes.js";
>>>>>>> 9c5e4f4 (test)
// import accountRoutes from "./accountRoutes.js";
// import transactionRoutes from "./transactionRoutes.js";
// import userRoutes from "./userRoutes.js";

const router = express.Router();
<<<<<<< HEAD
//router.use("/auth", authRoutes);
=======
router.use("/auth", authRoutes);
>>>>>>> 9c5e4f4 (test)
// router.use("/user", userRoutes);
// router.use("/account", accountRoutes);
// router.use("/transaction", transactionRoutes);

export default router;