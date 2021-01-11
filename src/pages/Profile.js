import React from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../helpers/auth';

const Profile = () => {

    const { user, isAdmin} = useAuth();
    
    return ( 
        <Layout>
            <section className="section-profile-cover section-shaped my-0" style={{height: "350px"}}>
                <img className="bg-image" src="/img/pages/mohamed.jpg" style={{width: "100%"}} alt="cover" />
                <div className="separator separator-bottom separator-skew">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon className="fill-secondary" points="2560 0 2560 100 0 100"></polygon>
                </svg>
                </div>
            </section>
            <section className="section bg-secondary">
                <div className="container">
                    <div className="card card-profile shadow mt--300">
                    <div className="px-4">
                        <div className="row justify-content-center">
                        <div className="col-lg-3 order-lg-2">
                            <div className="card-profile-image"  >
                            <a href="#!" >
                                <img src={user.avatar} style={{height: "150px", margin: "30px auto 0", display: "block"}} className="rounded-circle img-fluid" alt="avtar"/>
                            </a>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                            <div className="card-profile-actions py-4 mt-lg-0">
                            <a href="#!" className="btn btn-sm btn-info mr-4">Connect</a>
                            <a href="#!" className="btn btn-sm btn-default float-right">Message</a>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-1">
    
                        </div>
                        </div>
                        <div className="text-center mt-5">
                        <h3>{user.first_name} {user.last_name}<span className="font-weight-light">, 27</span></h3>
                        <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>{ isAdmin ? 'Admin' : 'User'}</div>
                        <div className="h6 mt-4"><i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer</div>
                        <div><i className="ni education_hat mr-2"></i>University of Computer Science</div>
                        </div>
                        <div className="mt-5 py-5 border-top text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                            <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                            <a href="#!">Show more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </Layout>
     );
}
 
export default Profile;