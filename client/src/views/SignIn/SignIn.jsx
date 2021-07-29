import { useState } from "react";
import { useHistory } from "react-router-dom"
import { signIn } from "../../services/users"
import Layout from "../../components/Layout"

export default function SignIn(props) {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const history = useHistory();

  const { setUser } = props;

  const handleInput = (e) => {
    const { id, value } = e.target
    setInput(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(input)
    console.log(user);
    setUser(user)
    history.push("/");
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label className="email-label">Email</label>
        <input id="email" className="email-input" type="email" value={input.email} onChange={handleInput} />
        <label>Password</label>
        <input id="password" type="password" value={input.password} onChange={handleInput} />
        <button>Sign In</button>
      </form>
    </Layout>
  )
}