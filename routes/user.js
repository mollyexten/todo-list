import { Router } from "express";
import { signUp, signIn, verify } from "../controllers/users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is user route"));

// signup route (POST)
router.post("/sign-up", signUp);

// signin route (POST)
router.post("/sign-in", signIn);

// verify route (GET)
router.get("/verify", verify);

// change password route (POST)
router.post("/change-password",);

export default router;