import './App.css';
import { Route } from "react-router-dom"
import { useState, useEffect } from "react";
import Home from "./views/Home/Home"
import SignUp from "./views/SignUp/SignUp"
import SignIn from "./views/SignIn/SignIn";
import { verify } from "./services/users";

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser();
  }, [])
  return (
    <div className="App">
      {/* Route for all todos */}
      <Route exact path="/">
        <Home user={user}/>
      </Route>
      {/* Route for a single todo */}
      {/* Route for posting/editing a todo */}
      {/* Route for logging in */}
      <Route path="/sign-in">
        <SignIn setUser={setUser} user={user}/>
      </Route>
      {/* Route for signing up */}
      <Route path="/sign-up">
        <SignUp setUser={setUser} user={user}/>
      </Route>
      </div>
  );
}

export default App;
