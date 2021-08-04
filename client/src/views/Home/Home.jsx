import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
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
  
  // const displayEditLink = (todo) => {
  //   if (todo.userId === props.user?.id) {
  //     <Link to={`/edit-todo/${todo._id}`}>edit</Link>}
  
  const todoListJSX = todos.map((todo, index) => (
    <div key={index}>
      <p>{todo.name}</p>
      {todo.userId === props.user?.id && (
        <Link to={`/edit-todo/${todo._id}`}>edit</Link>
      )}
    </div>
  ))

  return (
    <Layout setUser={props.setUser} user={props.user}>
      {props.user.id && todoListJSX}
    </Layout>
  )
}