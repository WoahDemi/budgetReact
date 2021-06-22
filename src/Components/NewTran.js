import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

function NewTran({ addTransaction }) {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    from: "",
    date: "",
    name: "",
    amount: 0,
  });

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addTransaction(transaction, index);
    console.log(history)
    history.push(`/transactions/${index}`);
  };

  return (
    <div className="Edit">
        <form onSubmit={handleSubmit}>
          <label htmlFor="from">From:</label>
          <textarea
            id="from"
            name="from"
            value={transaction.from}
            onChange={handleChange}
            placeholder="Who spent money?"
          />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="May 9.."
          onChange={handleChange}
        />
        <label htmlFor="name">Name:</label>
        <textarea
          id="name"
          name="name"
          value={transaction.name}
          onChange={handleChange}
          placeholder="What was paid for?"
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={Number(transaction.amount)}
          type="number"
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default NewTran;
