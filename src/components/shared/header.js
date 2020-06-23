import React from 'react';
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/auth'

import { useAuth } from '../../helpers/auth';

const Header = () => {

    const dispatch = useDispatch();
    const {checkPermissions, user, isAuthenticated} = useAuth();

    const SignOut  = async () => {
        dispatch(logout())
    }

    return ( 
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
        <div className="container">
          <Link className="navbar-brand mr-lg-5" to="/">
            <img src="/img/brand/white.png" alt="Logo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <Link to="/">
                    <img src="/img/brand/blue.png" alt="Logo" />
                  </Link>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
            
            <li className="nav-item">
                <Link className="nav-link" to="/about" role="button">
                    About
                </Link>
            </li>


            {
                isAuthenticated && <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/private" role="button">
                            Private
                        </Link>
                    </li>

                    {
                         checkPermissions('notes:read') &&
                         <li className="nav-item">
                            <Link className="nav-link" to="/notes" role="button">
                                Notes
                            </Link>
                        </li>
                    }
                   
                </>
            }

            </ul>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto navbar-nav-hover">
              <li className="nav-item">
                <a className="nav-link nav-link-icon" href="https://github.com/creativetimofficial/argon-design-system" target="_blank" data-toggle="tooltip" title="Star us on Github">
                  <i className="fab fa-github"></i>
                  <span className="nav-link-inner--text d-lg-none">Github</span>
                </a>
              </li>

              {
                !isAuthenticated && <>

                    <li className="nav-item d-none d-lg-block ml-lg-4">

                    <Link to="/login"  className="btn btn-link text-white btn-icon">
                    <span className="btn-inner--icon">
                        <i className="fas fa-user mr-1"></i>
                    </span>
                    <span className="nav-link-inner--text">Login</span>
                    </Link>
                    <Link to="/register" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                        <i className="fas fa-plus mr-1"></i>
                    </span>
                    <span className="nav-link-inner--text">Register</span>
                    </Link>
                    </li>

                </>
                }


                {
                isAuthenticated && <>
                    <li className="nav-item dropdown">
                        <a href="#!" className="nav-link" data-toggle="dropdown" >
                        <i className="ni ni-collection d-lg-none"></i>
                            <span className="nav-link-inner--text">Hello, {user.first_name}</span>
                        </a>
                        <div className="dropdown-menu">
                        <Link to="/profile" className="dropdown-item">Profile</Link>
                        <Link to="/" className="dropdown-item">Item</Link>
                        <a onClick={SignOut} role="button" href="#!" className="dropdown-item">Logout</a>
                        </div>
                    </li>
                </>
                }

            </ul>
          </div>
        </div>
      </nav>

     );
}
 
export default Header;