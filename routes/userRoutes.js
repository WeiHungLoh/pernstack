import express from "express";

const router = express.Router();

router.get("/", authMiddleWare, getUser);
router.put("/change-password", authMiddleWare, changePassword);
router.put("/:id", authMiddleWare, updateUser);

export default router;