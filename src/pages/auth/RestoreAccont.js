import React, { useState, useEffect, useReducer } from 'react';
import Layout from '../../components/Layout';
import { Link, useLocation } from 'react-router-dom';
import api from '../../services/api.service';
import { restoreReducer } from './AuthReducers';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const initialState = {
  loading: false,
  success: false,
  validRecoveryToken: false,
  error: null,
}

const RestoreAccont = () => {

    let query = useQuery();

    const [state, dispatch] = useReducer(restoreReducer, initialState);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [invalidPayload, setInvalidPayload] = useState(null);

    const checkToken = () => {
      dispatch({type: 'CHECK_RECOVERY_TOKEN'});
      api.get('/auth/check-recovery-token?token=' + query.get("token")).then(()=> {
        dispatch({type: 'VALID_RECOVERY_TOKEN'});
      }).catch((error)=> {
        dispatch({type: 'INVALID_RECOVERY_TOKEN', payload: error.response.data.message});
      });
    }
    
    const submit = () => {
      dispatch({type: 'NEW_PASSWORD_REQUEST'});
      api.post('/auth/reset-password?token=' + query.get("token"), { password }).then(()=> {
        dispatch({type: 'NEW_PASSWORD_SUCCESS'});
        setPassword('');
        setConfirmPassword('');
      }).catch((error)=> {
        dispatch({type: 'NEW_PASSWORD_FAILED', payload: error.response.data.message});
      });
    }
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        setInvalidPayload(null);

        if(!password || password.trim().length < 8) {
            setInvalidPayload('Your password must be at least 8 characters.');
            return;
        }

        if(password !== confirmPassword) {
            setInvalidPayload('Your password and confirm password must be the same.');
            return;
        }

        submit();
    }

    useEffect(() => {
      checkToken();
    }, [])

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
                        <small>Please, enter your new password.</small>
                      </div>
                      <form onSubmit={handleSubmit}>
                        {
                          state.validRecoveryToken && (
                          <>
                            <div className="form-group mb-3">
                              <div className="input-group input-group-alternative">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                </div>
                                <input className="form-control" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value) } disabled={state.loading} value={password}/>
                              </div>
                            </div>
                            <div className="form-group mb-3">
                              <div className="input-group input-group-alternative">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                </div>
                                <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value) } disabled={state.loading} value={confirmPassword}/>
                              </div>
                            </div>
                          </>)
                        }

                        {
                            state.success && <div className="alert alert-success text-center p-2">Done! Your password has been updated.</div>
                        }
                        {
                            state.error && <div className="alert text-danger text-center p-2">{state.error}</div>
                        }
                        {
                            invalidPayload && <div className="alert text-danger text-center p-2">{invalidPayload}</div>
                        }

                        {
                          state.validRecoveryToken && (
                            <div className="text-center">
                              <button disabled={state.loading} type="submit" className="btn btn-primary my-4">UPDATE PASSWORD</button>
                            </div>
                          )
                        }
                        
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
 
export default RestoreAccont;