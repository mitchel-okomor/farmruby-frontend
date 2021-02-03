import { useReducer } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { reducer, initialState } from "../src/store/reducer";
import History from "./utility/history";
import Store from "./store/store";
import Dashboard from "./components/Dashboard/dashboard";
import "./App.css";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Router history={History}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Store.Provider>
  );
}

export default App;
