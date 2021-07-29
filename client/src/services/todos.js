import api from "./apiConfig";

export const getAllTodos = async () => {
  try {
    const res = await api.get("/todo/all");
    return res.data;
  } catch (e) {
    throw e;
  }
}

export const createTodo = async (input) => {
  try {
    const res = await api.post("/todo/new", input)
    return res.data
  } catch (e) {
    throw e;
  }
}