import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../store/actions/auth';

import validators from '../helpers/validators';

import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const submit = () => {
        dispatch(Auth(email, password));
    }
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        setInvalidPayload(null);

        if(!validators.isEmail(email)) {
            setInvalidPayload('Your email is not valid.');
            return;
        }

        if(!validators.password.Length(password)) {
            setInvalidPayload('Your password must be at least 8 character length.');
            return;
        }

        submit();
    }

    return ( 
        <Layout>

<section className="section section-shaped section-lg">
    <div className="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="container pt-lg-7">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card bg-secondary shadow border-0">
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with credentials</small>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value) } disabled={loading}/>
                  </div>
                </div>
                <div className="form-group focused">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value) } disabled={loading}/>
                  </div>
                </div>
                {
                    error && <div className="alert text-danger p1">{error}</div>
                }
                {
                    invalidPayload && <div className="alert text-danger p1">{invalidPayload}</div>
                }
                <div className="text-center">
                  <button type="submit" className="btn btn-primary my-4">Sign in</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <Link to="/" className="text-light"><small>Forgot password?</small></Link>
            </div>
            <div className="col-6 text-right">
              <Link to="/" className="text-light"><small>Create new account</small></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </Layout>
     );
}
 
export default Login;