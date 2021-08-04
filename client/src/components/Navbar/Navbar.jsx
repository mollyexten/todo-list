import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { signOut } from "../../services/users";

export default function Navbar(props) {
  const history = useHistory();
  const handleSignOut = () => {
    history.push("/sign-in")
    signOut();
    props.setUser(null)
  }
  return (
    <div>
      <Link to="/">Todos</Link>
      {props.user ? (
        <>
          <div>{props.user?.username}</div>
          <Link to="/new-todo">Create a new todo</Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <div>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      )}
    </div>
  );
}
