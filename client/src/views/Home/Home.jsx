import { useState, useEffect } from "react"
import { getAllTodos } from "../../services/todos";
import Layout from "../../components/Layout"

export default function Home(props) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getAllTodos();
      setTodos(data);
    }
    fetchTodos()
  }, [])

  const todoListJSX = todos.map(todo => (
    <div>{todo.name}</div>
  ))

  return (
    <Layout user={props.user}>
      {todoListJSX}
      </Layout>
  )
}