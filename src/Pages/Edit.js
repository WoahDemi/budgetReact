
import EditTran from "../Components/EditTran";

function Edit({ updateTransaction }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <EditTran updateTransaction={updateTransaction} />
    </div>
  );
}

export default Edit; 