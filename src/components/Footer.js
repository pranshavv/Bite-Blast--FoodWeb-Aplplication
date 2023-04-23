// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Footer() {
//   return (
//     <div>
//   <footer className="py-5">
//     <ul className="nav">
//       <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
//       <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
//       <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
//     </ul>
//     <p>© 2022 Company, Inc. All rights reserved.</p>
//   </footer>
// </div>

//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, ContactMail } from '@mui/icons-material';


function Footer() {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav-item"><Link to="/" className="nav-link"><Icon component={Home} /> Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link"><Icon component={Info} /> About</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link"><Icon component={ContactMail} /> Contact</Link></li>
      </ul>
      <p>© 2022 Company, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


