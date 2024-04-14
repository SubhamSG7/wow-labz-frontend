import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [editAddress, setEditAddress] = useState(false);
  const [error, setError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [email, setEmail] = useState('');

  const selectedProduct = location.state.selectedProduct;

  useEffect(() => {
    const userEmail = Cookies.get('email');
    setEmail(userEmail);
    if (userEmail) {
      fetch('http://localhost:3030/api/orders/fecthuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          return response.json();
        })
        .then(data => {
          setAddress(data.address);
        })
        .catch(error => {
          setError('Error fetching user details');
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  const handlePlaceOrder = () => {
    if (editAddress && !newAddress) {
      setError('Please enter a new address');
      return;
    }

    fetch('http://localhost:3030/api/orders/placeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: selectedProduct,
        address: editAddress ? newAddress : address,
        email: email,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to place order');
        }
        setOrderPlaced(true);
      })
      .catch(error => {
        setError('Error placing order');
        console.error('Error placing order:', error);
      });
  };

  const handleAddressChange = () => {
    if (editAddress) {
      setAddress(newAddress);
    }
    setEditAddress(!editAddress);
    setError('');
  };

  const handleViewOrders = () => {
    navigate('/myOrders');
  };

  return (
    <div className="container mt-4">
      <h2>Place Your Order</h2>
      {selectedProduct && (
        <div className="card">
          <img src={selectedProduct.image} className="card-img-top" alt={selectedProduct.name} />
          <div className="card-body">
            <h5 className="card-title">{selectedProduct.name}</h5>
            <p className="card-text">{selectedProduct.description}</p>
            <p className="card-text">Price: ₹{selectedProduct.price}</p>
            {editAddress ? (
              <div className="mb-3">
                <label htmlFor="newAddress" className="form-label">New Address:</label>
                <input
                  type="text"
                  className="form-control"
                  id="newAddress"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                />
              </div>
            ) : (
              <p className="card-text">Address: {address}</p>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
            {orderPlaced ? (
              <div>
                <div className="alert alert-success" role="alert">
                  Order placed successfully!
                </div>
                <button className="btn btn-primary" onClick={handleViewOrders}>
                  View My Orders
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn-primary me-2" onClick={handleAddressChange}>
                  {editAddress ? 'Use Old Address' : 'Edit Address'}
                </button>
                <button className="btn btn-primary" onClick={handlePlaceOrder}>
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
