import { useState } from "react";

function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(5);
  const [hasDescription, setDescription] = useState(true);

  const handleTitleInput = (e) => setTitle(e.target.value);

  const handlePriceInput = (e) => setPrice(e.target.value);

  const handleRatingInput = (e) => setRating(e.target.value);

  const handleDescriptionInput = (e) => setDescription(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { title, price, rating, hasDescription };
    
    console.log("Submitted", newItem);
    props.AddProduct(newItem);

    // Reset the state
    setTitle("");
    setPrice("");
    setRating(5);
    setDescription(true);
  }


  return (
    <div className="AddItem">
      <h4>Add a Product</h4>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={handleTitleInput} />

        <label>Price:</label>
        <input type="text" name="price" value={price} onChange={handlePriceInput} />

        <label>Rating:</label>
        <input type="number" name="rating" value={rating} onChange={handleRatingInput} />

        <label>Description:</label>
        <input type="checkbox" name="hasDescription" checked={hasDescription} onChange={handleDescriptionInput} />
        <button type="submit">Add a Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
