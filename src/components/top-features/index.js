import React from 'react'

const TopFeatures = () => {

    return (
    <div className="section features-6">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="info info-horizontal info-hover-primary">
              <div className="description pl-4">
                <h5 className="title">For Developers</h5>
                <p>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now.</p>
                <a href="#!" className="text-info">Learn more</a>
              </div>
            </div>
            <div className="info info-horizontal info-hover-primary mt-5">
              <div className="description pl-4">
                <h5 className="title">For Designers</h5>
                <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
                <a href="#!" className="text-info">Learn more</a>
              </div>
            </div>
            <div className="info info-horizontal info-hover-primary mt-5">
              <div className="description pl-4">
                <h5 className="title">For Beginners</h5>
                <p>That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. If everything I did failed - which it doesn't.</p>
                <a href="#!" className="text-info">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-10 mx-md-auto">
            <img className="ml-lg-5" src="/img/ill/ill.png" width="100%" alt="icon"/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default TopFeatures;