import React, { useState } from 'react';


const ERP = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const addProduct = (e) => {
        e.preventDefault();
        setProducts([...products, { productName, productPrice }]);
        setProductName('');
        setProductPrice('');
    };

    return (
        <div>
            <h2>Enterprise Resource Planning (ERP)</h2>
            <form onSubmit={addProduct}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Product Price:
                    <input
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Product</button>
            </form>
            <div>
                {products.map((product, index) => (
                    <p key={index}>
                        <strong>Product:</strong> {product.productName}<br />
                        <strong>Price:</strong> ${product.productPrice}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ERP;
