import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from '../util/apiURL';
const API = apiURL();

function EditTran(props) {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    from: "",
  date: "",
  name: "",
  amount: ""
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

//   const handleCheckboxChange = () => {
//     setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
//   };

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
    await props.updateBookmark(transaction, index);
    history.push(`/transactions/${index}`);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="Amount"
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="May 9.."
          onChange={handleTextChange}
        />
        
        <label htmlFor="purchase">Purchase:</label>
        <textarea
          id="purchase"
          name="purchase"
          value={transaction.purchase}
          onChange={handleTextChange}
          placeholder="What was"
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