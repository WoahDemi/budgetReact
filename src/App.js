import logo from "./logo.svg";
import "./App.css";
//Dependencies

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";


//Pages

import Index from "./Pages/Index";
import New from "./Pages/New";

import NavBar from "./Components/NavBar";

import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = async (newTransaction) => {
    let res;
    try {
      res = await axios.post(`${API}/transactions`, newTransaction);
      setTransactions((prevTransactions) => [...prevTransactions, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route path="/transactions/new">
              <New addTransaction={addTransaction} />
            </Route>
            <Route path="/transactions">
              <Index/>
            </Route>
            <Route exact path="/">
              <h1>Welcome to your new Money Life!</h1>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
