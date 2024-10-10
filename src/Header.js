import React, { useState } from "react";
import LoginPopup from "./LoginPopup";

const Header = ({ totalItems, togglePopup, user, onLogin }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLogin = () => {
    setShowLoginPopup(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Pizza House
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <button
          className="btn btn-danger position-relative"
          onClick={togglePopup}
        >
          <i className="fa fa-shopping-cart"></i>
          {totalItems > 0 && (
            <span className="badge bg-danger">{totalItems}</span>
          )}
        </button>
        {user ? (
          <div className="text-white ms-3">Welcome, {user.name}</div>
        ) : (
          <button className="btn btn-primary ms-3" onClick={handleLoginClick}>
            Login
          </button>
        )}
      </div>
      {showLoginPopup && (
        <LoginPopup onClose={handleCloseLogin} onLogin={onLogin} />
      )}
    </nav>
  );
};

export default Header;
