import React from 'react';
import { Link } from 'react-router-dom';
import svgart from '../../img/undraw.svg';

const Landing = () => {
  return (
    <div className="landingSection bg-dark">
      <div className="container">
        <div className="landing-main">
          <div className="left">
            <h1>Nameless</h1>
            <h6>Anonymous.Post.Interact</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              consequuntur sapiente quod similique? Mollitia cum consectetur
              repellendus minus quasi nemo?
            </p>

            <Link to="/register" className="landing-btn">
              Register
            </Link>
          </div>
          <div className="right">
            <img src={svgart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
