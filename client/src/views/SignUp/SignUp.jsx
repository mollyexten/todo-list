import { useState } from "react";
import { useHistory } from "react-router-dom"
import { signUp } from "../../services/users"

export default function SignUp(props) {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  })
  const { setUser } = props;
  const history = useHistory();

  const handleInput = (e) => {
    const { id, value } = e.target
    setInput(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signUp(input)
    console.log(user);
    setUser(user);
    history.push("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="username-label">Username</label>
      <input id="username" className="username-input" type="text" value={input.username} onChange={handleInput} />
      <label className="email-label">Email</label>
      <input id="email" className="email-input" type="email" value={input.email} onChange={handleInput} />
      <label>Password</label>
      <input id="password" type="password" value={input.password} onChange={handleInput} />
      <button>Sign Up</button>
    </form>
  )
}