import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24"></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24"></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24"> </svg></Link></li>
      </ul>
    </div>
  </footer>
    </div>
  )
}
