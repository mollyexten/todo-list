import { Router } from "express";
import userRouters from "./user.js";

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

// router.use("/", usersRoutes);
// router.use("/", todosRoutes);

export default router;