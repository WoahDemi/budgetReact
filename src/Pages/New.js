import NewTran from "../Components/NewTran";

function New({ addTransaction }) {
  return (
    <div className="New">
      <h2>New</h2>
      <NewTran addTransaction={addTransaction} />
    </div>
  );
}

export default New;
