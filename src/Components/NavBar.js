import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home </Link> 
      <Link to="/transactions">Index  </Link>
      <Link to="/transactions/new">New-Transaction</Link>
    </nav>
  );
}
