import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h2><Link to="/transactions">Index</Link></h2>
      <h2><Link to="/transactions/new">New Transaction</Link> </h2>
    </nav>
  );
}