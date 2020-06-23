import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
    <div className="section section-hero section-shaped">
      <div className="shape shape-style-3 shape-default">
        <span className="span-150"></span>
        <span className="span-50"></span>
        <span className="span-50"></span>
        <span className="span-75"></span>
        <span className="span-100"></span>
        <span className="span-75"></span>
        <span className="span-50"></span>
        <span className="span-100"></span>
        <span className="span-50"></span>
        <span className="span-100"></span>
      </div>
      <div className="page-header">
        <div className="container shape-container d-flex align-items-center py-lg">
          <div className="col px-0">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center">
                <h1 className="text-white display-1">People stories</h1>
                <h2 className="display-4 font-weight-normal text-white">The time is right now!</h2>
                <div className="btn-wrapper mt-4">
                  <Link to="/register" className="btn btn-warning btn-icon mt-3 mb-sm-0">
                    <span className="btn-inner--icon"><i className="ni ni-button-play"></i></span>
                    <span className="btn-inner--text">Register Now!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    )

}

export default Hero;