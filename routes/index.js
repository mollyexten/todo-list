import { Router } from "express";
import userRoutes from "./user.js";
import todoRoutes from "./todo.js";

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

router.use("/users", userRoutes);
router.use("/todo", todoRoutes);

export default router;