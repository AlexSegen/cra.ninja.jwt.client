import React, { useState } from 'react';
import validators from '../../helpers/validators';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

import api from '../../services/api.service';

const RequestRecovery = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const submit = () => {
        setLoading(true);
        api.post('/auth/request-recovery', { email }).then(()=> {
          setLoading(false);
          setSuccess(true);
          setEmail('');
        }).catch((error)=> {
          setError(error.response.data.message)
          setLoading(false);
        });
    }
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        setInvalidPayload(null);
        setError(null)
        setSuccess(false);

        if(!validators.isEmail(email)) {
            setInvalidPayload('Your email is not valid.');
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
                <small>A recovery link will be send to your email</small>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input disabled={loading} className="form-control" type="email" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value) } disabled={loading}/>
                  </div>
                </div>
                {
                    success && <div className="alert text-success p1">Done! Please, check your inbox.</div>
                }
                {
                    error && <div className="alert text-danger p1">{error}</div>
                }
                {
                    invalidPayload && <div className="alert text-danger p1">{invalidPayload}</div>
                }
                <div className="text-center">
                  <button disabled={loading} type="submit" className="btn btn-primary my-4">Request Link</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <Link to="/login" className="text-light"><small>Login</small></Link>
            </div>
            <div className="col-6 text-right">
              <Link to="/" className="text-light"><small>Home</small></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </Layout>
     );
}
 
export default RequestRecovery;