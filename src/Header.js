import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start">
              <h1 className="display-2">
                Online payment made <br /> easy for you
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident incidunt, odio et, praesentium labore aut voluptates
                non iusto vel quidem quibusdam fugit sapiente placeat expedita
                totam omnis eveniet ipsam nostrum.
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>

            {/* main heaser right side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg"
                alt="heroimg"
                className="img-fluid"
              />
               <img
                src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg"
                alt="heroimg"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
