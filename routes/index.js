import { Router } from "express";
import userRoutes from "./user.js";

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

router.use("/users", userRoutes);
// router.use("/", todosRoutes);

export default router;