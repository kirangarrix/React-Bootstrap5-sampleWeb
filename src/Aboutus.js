import React, { useState } from 'react'
import howToUse from './API/howToUse'
const Aboutus = () => {

    const [aboutData, setAboutData]=useState(howToUse);

    return (
        <>
        <section className="common-section our-services">
           <div className="container mb-5">
              <div className="row">
             <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                 <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg" alt="aboutusIMG" />
             </div>
             {/* 1st section right side */}
             <div className="col-12 col-lg-7 our-service-list">
                 <h3 className="mini-title">
                     Available @ Google and Ios Store only
                 </h3>
                 <h1 className="main-heading">How to use the App?</h1>
                 {aboutData.map((curElem) => {
                     const {id,title,info}=curElem;
                 return( <>
                 <div className="row our-services-info" key={id}>
                     <div className="col-1 our-services-number">{id}</div>
                     <div className="col-10 our-services-data">
                         <h2>{title}</h2>
                         <p className="main-hero-para">
                            {info}
                         </p>
                     </div>
                     <br />
                     <button className="btn-style btn-style-boarder">learn more</button>
                 </div>
                 </>)
                 })}
             
             </div>
              </div>
           </div>
        </section>

        {/* 2nd part of about us */}

        <section className="common-section our-services-rightside">
           <div className="container mb-5">
              <div className="row">
          
             {/* 1st section right side */}
             <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-content-start flex-column">
                 <h3 className="mini-title fw-normal mb-5">
                    --Support in Any Language
                 </h3>
                 <h1 className="main-heading fw-bold">World class Support is <br/> available 24/7</h1>
                 {aboutData.map((curElem) => {
                     const {id,title,info}=curElem;
                 return( <>
                 <div className="row our-services-info">
                     <div className="col-1 our-services-number">{id}</div>
                     <div className="col-10 our-services-data">
                         <h2>{title}</h2>
                         <p className="main-hero-para">
                            {info}
                         </p>
                     </div>
                     <br />
                     <button className="btn-style btn-style-boarder">learn more</button>
                 </div>
                 </>)
                 })}
             
             </div>
               {/* Image section */}
             <div className="col-12 col-lg-5  our-service-rightside-img">
                 <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg" alt="aboutusIMG" />
             </div>

              </div>
           </div>
        </section>

        </>
    )
}

export default Aboutus
