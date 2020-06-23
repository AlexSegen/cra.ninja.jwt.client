import React from 'react';
const Footer = () => {

    return ( 
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center justify-content-md-between">
              <div className="col-md-6">
                <div className="copyright">
                  &copy; {(new Date()).getFullYear()} <a href="#" target="_blank">AlexSegen</a>.
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav nav-footer justify-content-end">
                  <li className="nav-item">
                    <a href="#!" className="nav-link" target="_blank">Creative Tim</a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link" target="_blank">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link" target="_blank">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link" target="_blank">License</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
     );
}
 
export default Footer;