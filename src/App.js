import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import LogIn from "./Log In/LogIn";
import Form from "./Form Authentication/Form";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/PTJ-90-Project" exact>
            <Homepage />
          </Route>
          {/* <Route path="/" exact>
            <Homepage />
          </Route> */}
          <Route path="/log-in" exact>
            <LogIn />
          </Route>
          <Route path="/get-started" exact>
            <Form />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
