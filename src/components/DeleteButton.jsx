import React from "react";

function DeleteButton({ productId, onDelete }) {
  const handleDelete = () => {
    // Simulate deleting the item from the state (replace this with actual backend logic)
    onDelete(productId);
  };

  return (
    <div className="DeleteButton">
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default DeleteButton;



