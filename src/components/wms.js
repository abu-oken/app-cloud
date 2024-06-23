import React, { useState } from 'react';

const WMS = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, { itemName, itemQuantity }]);
        setItemName('');
        setItemQuantity('');
    };

    return (
        <div>
            <h2>Warehouse Management System (WMS)</h2>
            <form onSubmit={addItem}>
                <label>
                    Item Name:
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Item Quantity:
                    <input
                        type="number"
                        value={itemQuantity}
                        onChange={(e) => setItemQuantity(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Item</button>
            </form>
            <div>
                {items.map((item, index) => (
                    <p key={index}>
                        <strong>Item:</strong> {item.itemName}<br />
                        <strong>Quantity:</strong> {item.itemQuantity}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default WMS;
