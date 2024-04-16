import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './Orders.css'
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const email = Cookies.get('email');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3030/api/orders/myOrders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            email: email,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    if (email) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [email]);

  const handleEditOrder = (orderId) => {
    // Handle edit order logic
    console.log('Edit order:', orderId);
  };

  const handleCancelOrder = (orderId) => {
    // Handle cancel order logic
    console.log('Cancel order:', orderId);
  };

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <h1 className="mb-4 text-center">Your Orders</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {orders.map(order => (
              <div key={order._id} className="col">
                <div className="card h-100">
                  <div className="oval-mask"></div>
                  <img src={order.image} alt={order.name} className="card-img-top img-fluid oval-image" />
                  <div className="card-body">
                    <h5 className="card-title">{order.name}</h5>
                    <p className="card-text">Price: ₹{order.price}</p>
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary" onClick={() => handleEditOrder(order._id)}>Edit Order</button>
                      <button className="btn btn-danger" onClick={() => handleCancelOrder(order._id)}>Cancel Order</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
