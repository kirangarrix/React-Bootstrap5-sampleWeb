import React, { useState } from "react";
import workapi from "./API/workApi";
const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  console.log(workData);

  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <React.Fragment key={id}>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
