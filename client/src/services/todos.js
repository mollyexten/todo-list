import api from "./apiConfig";

export const getAllTodos = async () => {
  try {
    const res = await api.get("/todo/all");
    return res.data;
  } catch (e) {
    throw e;
  }
}

export const getOneTodo = async (id) => {
  try {
    const res = await api.get(`/todo/todo/${id}`)
    return res.data;
  } catch (e) {
    throw e;
  }
}

export const createTodo = async (input) => {
  try {
    console.log(input)
    const res = await api.post("/todo/new", input)
    return res.data
  } catch (e) {
    throw e;
  }
}

export const updateTodo = async (id, input) => {
  try {
    console.log("attempting update");
    const res = api.put(`/todo/update/${id}`, input)
    return res.data;
  } catch (e) {
    throw e;
  }
}