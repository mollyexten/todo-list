import { Router } from "express";
import restrict from "../helpers/restrict.js";
import { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo } from "../controllers/todos.js";

const router = Router();

// get all todos
router.get("/todos", getAllTodos);
// get id todo
router.get("/todos/:id", getTodo);
// post create todo
router.post("/todos", restrict, createTodo);
// put update todo
router.put("/todos/:id", restrict, updateTodo);
// delete todo
router.delete("/todos/:id", restrict, deleteTodo);

export default router;