
import EditTran from "../Components/EditTran";

function Edit({ updateTransaction }) {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <EditTran updateBookmark={updateTransaction} />
    </div>
  );
}

export default Edit;