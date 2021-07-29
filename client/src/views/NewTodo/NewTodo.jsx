import Layout from "../../components/Layout";
import { useState } from "react"
import { useHistory } from "react-router"
import { createTodo } from "../../services/todos"

export default function NewTodo(props) {
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    due_date: "",
    complete: ""
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput(prevInput => ({
            ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo(input);
    history.push("/")
  }

  return (
    <Layout setUser={props.setUser} user={props.user}>
      <div>
        New Todo!
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input id="name" value={input.name} onChange={handleChange} />
          <br />
          <label>Due Date</label>
          <input id="due_date" value={input.due_date} onChange={handleChange} />
          <br />
          <label>Complete</label>
          <input id="complete" value={input.complete} onChange={handleChange} />
          <br />
          <button>Create Todo</button>
        </form>
      </div>
    </Layout>
  )
}