import logo from "./logo.svg";
import "./App.css";
//Dependencies

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// import EditTran from "./Components/EditTran"
// import ListAll from "./Components/ListAll";
// import NewTran from "./Components/NewTran"
// import ShowOne from "./Components/ShowOne"
// import EditTran from "./Components/EditTran";

//Pages

import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

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
  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
      const dummyState = [...transactions];
      dummyState.splice(index, 1);
      setTransactions(dummyState);
    } catch (err) {
      console.log(err);
    }
  };


  const fetchTransactions = async () => {
    let res;
    try {
      res = await axios.get(`${API}/transactions`);
      console.log(res.data);
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
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
              <Index fetchTransactions={fetchTransactions}/>
            </Route>
            <Route exact path="/">
              <h1>Welcome to your new Money Life!</h1>
            </Route>
            <Route></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
