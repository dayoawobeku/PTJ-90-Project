import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import UserDashboardGreetings from "./User-Dashboard-Screens/UserDashboardGreetings";
import Form from "./Form-Authentication/Form";
//import UserDashboardLayout from "./User Dashboard Screens/UserDashboardLayout";
// import ProductDetails from "./User-Dashboard-Screens/ProductDetails";
import Payment from "./User-Dashboard-Screens/Payment";
import LoginForm from "./Log-In/LoginForm";
// import SellerDetails from "./User-Dashboard-Screens/SellerDetails";
import SellerDetailsForm from "./User-Dashboard-Screens/SellerDetailsForm";
import ProductDetailsForm from "./User-Dashboard-Screens/ProductDetailsForm";

// const BrowserHistory = require("react-router/lib/BrowserHistory").default;
function App() {
  return (
    <>
      {/* <Router history={BrowserHistory}> */}
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

          <Route path="/user-dashboard" exact>
            <UserDashboardGreetings />
          </Route>

          <Route path="/seller-details" exact>
            <SellerDetailsForm />
          </Route>

          <Route path="/product-details" exact>
            <ProductDetailsForm />
          </Route>

          <Route path="/payment" exact>
            <Payment />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
