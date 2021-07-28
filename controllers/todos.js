import Todo from "../models/task.js"

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({})
    res.json(todos)
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id)
    if (todo) {
      res.json(todo)
    }
  } catch (e) {
    res.status(404).json({error: "Todo not found"})
  }
}

export const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export const updateTodo = async (req, res) => {
  try {

  } catch (e) {
    res.status(500)
    res.status(500).json({ error: e.message })
  }
}

export const deleteTodo = async (req, res) => {
  try {

  } catch (e) {
    res.status(500)
    res.status(500).json({ error: e.message })
  }
}