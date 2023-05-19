import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function NavBar(props) {

  const [cartView, setCartView] = useState(false)
  let data = useCart();
    localStorage.setItem('temp', "first")

  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg position-sticky">
        <Link className="navbar-brand" to="/">

          Bite Blast
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {(localStorage.getItem("authToken")) ?
              <Link className="nav-link" aria-current="page" to="/myOrder">
                My Orders
              </Link>
              : ""}
          </ul>
          {(!localStorage.getItem("authToken")) ?
            <div className="d-flex">

              <Link className="btn" to="/login">Login</Link>
              <Link className="btn" to="/createuser ">Sign Up</Link>
            </div>
            :
            <div>
              <div className="btn"  onClick={()=>{setCartView(true)}}>
                My Cart {"  "}
                {<Badge pill bg="danger">{data.length}</Badge>}
              </div>
              {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
              <div className="btn" onClick={handleLogout}>
                Logout
              </div>
            </div>
          }
        </div>
      </nav>
    </div>
  );
}
