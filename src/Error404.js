import React from "react";
import { NavLink } from "react-router-dom";
const Error404 = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry page not found</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quis
            debitis quibusdam, dolorem sint repudiandae!
          </p>
          <NavLink to="/" className="btn btn-danger">Back to page</NavLink>
        </div>
      </div>
    </>
  );
};

export default Error404;
