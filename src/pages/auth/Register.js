import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Register from '../../store/actions/register';

import validators from '../../helpers/validators';

import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const initialUser = { first_name: "",  last_name: "", email: "", password: "" };

    const dispatch = useDispatch();
    const {loading, error, success} = useSelector(state => state.register);

    const [user, setUser] = useState(initialUser)
    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const submit = () => {
        dispatch(Register(user))
    }
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        setInvalidPayload(null);
        
        if(!validators.onlyLetters(user.first_name) || !validators.onlyLetters(user.last_name)) {
            setInvalidPayload('Check your first name and last name.');
            return;
        }

        if(!validators.isEmail(user.email)) {
            setInvalidPayload('Your email is not valid.');
            return;
        }

        if(!validators.password.Length(user.password)) {
            setInvalidPayload('Your password must be at least 8 character length.');
            return;
        }

        submit();
    }

    const handleChange = e =>{
        const value = e.target.value;
        setUser({
          ...user,
          [e.target.name]: value
        });
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
                  <small>Sign up with credentials</small>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="input-group input-group-alternative mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                      </div>
                      <input className="form-control" type="text" name="first_name" placeholder="First name" onChange={handleChange} disabled={loading}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-alternative mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                      </div>
                      <input className="form-control" type="text" name="last_name" placeholder="Last name" onChange={handleChange} disabled={loading}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-alternative mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                      </div>
                      <input className="form-control" type="email" name="email" placeholder="Email" onChange={handleChange} disabled={loading}/>
                    </div>
                  </div>
                  <div className="form-group focused">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                      </div>
                      <input className="form-control" type="password" placeholder="Password" name="password" onChange={handleChange} disabled={loading}/>
                    </div>
                  </div>

                    {
                        success && <div className="alert text-success p-2">Your account has been created Please, <Link to="/login">Sign In</Link></div>
                    }
                  
                    {
                        error && <div className="alert text-danger p-2">{error}</div>
                    }
                    {
                        invalidPayload && <div className="alert text-danger p-2">{invalidPayload}</div>
                    }

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-4" disabled={loading}>{loading ? 'Loading...':'Create account'}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </Layout>
     );
}
 
export default SignUp;