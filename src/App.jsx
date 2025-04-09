import React, { useState } from 'react';

function DynamicListManager() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(['First item']);

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems(prev => [...prev, newItem]);
      setNewItem('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dynamic List Manager</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter an item"
          value={newItem}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.addButton}>
          Add Item
        </button>
      </div>
      <div style={styles.listContainer}>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '500px',
    margin: '20px auto ',
    backgroundColor: '#f9f9f9',

  },
  heading: {
    textAlign: 'left',
    marginBottom: '20px',
    color: '#228b22',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '15px',
  },
  input: {
    flexGrow: 1,
    flexShrink: 1,
    padding: '10px',
    marginLeft: '0px',
    border: '1px solid #90ee90',
    backgroundColor: '#f5f5f5',
    color: ' #000000',
    borderRadius: '4px',
    fontSize: '16px',
  },
  addButton: {
    backgroundColor: '#228b22',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '1px',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '0px',
  },
  listContainer: {
    border: '1px solid #ddd',
    borderRadius: '3px',
    backgroundColor: '#e0fbe0',
    padding: '4px',
    minHeight: '100px',

  },
  listItem: {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    listStyleType: 'disc',
    marginLeft: '20px',
    fontFamily: 'san-serif',
    fontWeight: 'bold',

  },
};

export default DynamicListManager;