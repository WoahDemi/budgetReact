import ListAll from "../Components/ListAll";

function Index({ fetchTransactions }) {
  return (
    <div className="Index">
      <h2>All Transactions</h2>
      <ListAll/>
    </div>
  );
}
export default Index