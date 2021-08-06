import Layout from "../../components/Layout";
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router"
import { createTodo, getOneTodo, updateTodo } from "../../services/todos"

export default function NewTodo(props) {
  const history = useHistory();
  const { id } = useParams();
  const [input, setInput] = useState({
    name: "",
    due_date: "",
    complete: ""
  })

  useEffect(() => {
    const fillInForm = async (id) => {
      const res = await getOneTodo(id);
      setInput(res)
    }
    if (id) {
      fillInForm(id);
    }
  }, [id])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput(prevInput => ({
            ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const update = await updateTodo(id, input)
      console.log(update)
    } else {
      await createTodo(input);
    }
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