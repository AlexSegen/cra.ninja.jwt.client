import React from 'react';

const PageHeader = ({title}) => {

    return (
    <div className="pt-5 pb-4 section-shaped bg-primary">
        <div className="page-header pt-3">
          <div className="container shape-container d-flex align-items-center">
            <div className="col px-0">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 text-center">
                  <h1 className="text-white display-3 my-4">{title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

}

export default PageHeader;