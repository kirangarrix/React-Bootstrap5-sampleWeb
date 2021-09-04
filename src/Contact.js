import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt iusto asperiores, doloremque aperiam nam distinctio
                  </p>
                  <figure>
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact */}

                <div className="contact-rightside col-12 col-lg-7">
                  <form action="">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add address"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your message"
                        />
                      </div>
                    </div>

                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label main-hero-para"
                        htmlFor="flexCheckDefault"
                      >
                        I agree that the website may contact me at email or
                        phone
                      </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
