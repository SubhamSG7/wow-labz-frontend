import React from 'react';

const Header = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row align-items-center">
        <div className="col-2">
          <img src="/path_to_your_image.jpg" alt="Logo" className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">Search</button>
            </div>
          </div>
        </div>
        <div className="col-4 text-right">
          <button className="btn btn-outline-primary mr-2">My Cart</button>
          <button className="btn btn-outline-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
