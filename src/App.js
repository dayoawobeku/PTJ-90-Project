import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import UserDashboardGreetings from "./User-Dashboard-Screens/UserDashboardGreetings";
import Form from "./Form-Authentication/Form";
//import UserDashboardLayout from "./User Dashboard Screens/UserDashboardLayout";
import ProductDetails from "./User-Dashboard-Screens/ProductDetails";
import Payment from "./User-Dashboard-Screens/Payment";
import LoginForm from "./Log-In/LoginForm";

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
          <Route path="/get-started" exact>
            <Form />
          </Route>

          <Route path="/log-in" exact>
            <LoginForm />
          </Route>

          <Route path="/user-dashboard" component={UserDashboardGreetings} />

          <Route path="/purchase-info" component={ProductDetails} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
