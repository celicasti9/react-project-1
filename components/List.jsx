import React, { useState, useEffect } from 'react';

const List = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/products.json'); // Adjust the path based on your project structure
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.log('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const handleDelete = (itemId) => {
    // Implement your logic to delete the item from the list
    // For example, update the state or make an API call
    console.log(`Deleting item: ${name}`);
  };

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {jsonData.map((name) => (
          <List key={name.id} item={name} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default List;