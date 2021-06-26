import axios from "axios";
import { useState, useEffect } from "react";

import { apiURL } from "../util/apiURL";
const API = apiURL();

function List() {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState("");

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions/`);
      setTransactions(res.data);
      console.log(transactions);
      debugger;
      let sum = 0;
      res.data.forEach((transaction) => {
        debugger;
        sum += Number(transaction.amount);
      });
      setTotal(sum);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <div>
      <h3>Total: ${total}</h3>
      {transactions.map((transaction) => {
        const { from, date, name, amount } = transaction;
        return (
          <li>
            {from} {date} {name} ${amount}
          </li>
        );
      })}
    </div>
  );
}

export default List;
