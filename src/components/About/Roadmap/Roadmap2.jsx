import React from "react";

function Roadmap2({roadmapRef}) {
  return (
    <div id="roadmapComponent" ref={roadmapRef}>
      <h1 id="roadmapCompTitle">RoadMap</h1>
      <div >
        <div className="container">
          <div className="row">
            <div style={{width:"100%",maxWidth:"100%"}}>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Build & Design</h2>
                  <p className="roadmapText">
                   Build and design the website and program the smart contract 
                  </p>
                  {/* <p className="roadmapText">5,000 llamas will be released.</p> */}
                </div>
              </div>{" "}
            </div>
            <div style={{width:"100%",maxWidth:"100%"}}>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Community</h2>
                  <p className="roadmapText">
                    Build the ETC Pharaohs community twitter account and receive feedback
                  </p>
                  {/* <p className="roadmapText">
                    5,000 more llamas will be released on launch day.
                  </p> */}
                </div>
              </div>{" "}
            </div>
            <div style={{width:"100%",maxWidth:"100%"}}>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Launch Minting</h2>
                  <p className="roadmapText">
                  Launch minting to all of our 5,000 Pharaohs on 12/12
                  </p>
                </div>
              </div>{" "}
            </div>
            <div style={{width:"100%",maxWidth:"100%"}}>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Sold Out</h2>
                  <p className="roadmapText">
                  Completely sold out of Classic Pharaohs 
                  </p>
                
                </div>
              </div>
            </div>
            <div style={{width:"100%",maxWidth:"100%"}}>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Giveaways</h2>
                  <p className="roadmapText">
                  Hold Giveaways for the people that could not get a pharaoh
                  </p>
                
                </div>
              </div>
            </div>

            <div style={{width:"100%",maxWidth:"100%"}}>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="roadmapTextContainer">
                  <h2 className="roadmapTitle">Charity</h2>
                  <p className="roadmapText">
                  Donate 10% of the proceedings to a charity or a cause that the ETCarmy chooses 
                  </p>
                
                </div>
              </div>
            </div>
        
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Roadmap2;
