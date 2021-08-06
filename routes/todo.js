import { Router } from "express";
import restrict from "../helpers/restrict.js";
import { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo } from "../controllers/todos.js";

const router = Router();

// get all todos
router.get("/all", restrict, getAllTodos);
// post create todo
router.post("/new", restrict, createTodo);
// put update todo
router.put("/update/:id", restrict, updateTodo);
// delete todo
router.delete("/delete/:id", restrict, deleteTodo);
// get id todo
router.get("/todo/:id", restrict, getTodo);
export default router;