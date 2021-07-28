import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

// router.use("/", usersRoutes);
// router.use("/", todosRoutes);

export default router;