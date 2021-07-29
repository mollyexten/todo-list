import './App.css';
import { Route } from "react-router-dom"
import Home from "./views/Home/Home"

function App() {
  return (
    <div className="App">
      {/* Route for all todos */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Route for a single todo */}
      {/* Route for posting/editing a todo */}
      {/* Route for logging in */}
      {/* Route for signing up */}
      </div>
  );
}

export default App;
