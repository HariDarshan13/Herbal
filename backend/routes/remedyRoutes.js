import express from "express";
import { createRemedy, getRemedies } from "../controllers/remedyController.js";

const router = express.Router();

router.post("/", createRemedy);
router.get("/", getRemedies);

export default router;
