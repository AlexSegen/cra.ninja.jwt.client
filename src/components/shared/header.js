import React from 'react';
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/auth'

import {useAuth} from '../../helpers/auth';

import styles from './header.module.scss';

const Header = () => {

    const dispatch = useDispatch();
    const {checkPermissions, user, isAuthenticated} = useAuth();

    const SignOut  = async () => {
        dispatch(logout())
    }

    return ( 
        <header className={styles.header}>
            <Link className="btn btn-sm btn-link" to='/'>Home</Link>
            <Link className="btn btn-sm btn-link" to='/about'>About</Link>
            { isAuthenticated && <Link className="btn btn-sm btn-link" to='/private'>Private</Link> }
            { isAuthenticated && checkPermissions('notes:read') &&  <Link className="btn btn-sm btn-link" to='/notes'>Notes</Link> }
            { isAuthenticated && <button className="btn btn-sm btn-link" type="button" onClick={SignOut} >{user.first_name} (Sign Out)</button>}
            { !isAuthenticated &&  <Link className="btn btn-sm btn-link" to='/login'>Login</Link> }
            { !isAuthenticated &&  <Link className="btn btn-sm btn-link" to='/register'>Register</Link> }
        </header>
     );
}
 
export default Header;