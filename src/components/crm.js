import React, { useState } from 'react';

const CRM = () => {
    const [customers, setCustomers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addCustomer = (e) => {
        e.preventDefault();
        setCustomers([...customers, { name, email }]);
        setName('');
        setEmail('');
    };

    return (
        <div>
            <h2>Customer Relationship Management (CRM)</h2>
            <form onSubmit={addCustomer}>
                <label>
                    Customer Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Customer Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Customer</button>
            </form>
            <div>
                {customers.map((customer, index) => (
                    <p key={index}>
                        <strong>Name:</strong> {customer.name}<br />
                        <strong>Email:</strong> {customer.email}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CRM;
