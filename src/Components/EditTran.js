import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from '../util/apiURL';
const API = apiURL();

function EditTran({updateTransaction}) {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    buyer: "",
  date: "",
  purchase: "",
  amount: ""
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
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateTransaction(transaction, index);
    history.push(`/transactions/${index}`);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Buyer:</label>
        <textarea
          id="buyer"
          name="buyer"
          value={transaction.buyer}
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
        <label htmlFor="purchase">Purchase:</label>
        <textarea
          id="purchase"
          name="purchase"
          value={transaction.purchase}
          onChange={handleChange}
          placeholder="What was paid for?"
        />
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            value={transaction.amount}
            type="number"
            onChange={handleChange}
            placeholder="Amount"
            required
          />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditTran