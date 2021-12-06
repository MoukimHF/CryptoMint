import React from "react";

function Roadmap({roadmapRef}) {
  return (
    <div id="roadmap" className="section" ref={roadmapRef}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                data-delay="0.1"
                title="Roadmap Activations"
                className="title title-xl roadmap__gelato"
              >
                Roadmap
              </h2>
              <p>
                Build and design the website and program the smart contract
                Build the ETC Pharaohs community twitter account and receive
                feedback Launch minting to all of our 5,000 Pharaohs on 12/12
                Completely sold out of Classic Pharaohs Hold Giveaways for the
                people that could not get a pharaoh Donate 10% of the
                proceedings to a charity or a cause that the ETCarmy chooses
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="roadmap-wrap roadmap-wrap-s5 mb-0">
                <div
                  className="
            roadmap roadmap-s5 roadmap-right roadmap-finished
          "
                >
                  <div className="roadmap-step roadmap-step-s5">
                    <div className="roadmap-head roadmap-head-s5">
                      <span className="roadmap-time roadmap-time-s5">#1</span>
                    </div>
                    <p>Build tech.</p>
                  </div>
                </div>
                <div
                  className="
            roadmap roadmap-s5 roadmap-left roadmap-finished
          "
                >
                  <div className="roadmap-step roadmap-step-s5">
                    <div className="roadmap-head roadmap-head-s5">
                      <span className="roadmap-time roadmap-time-s5">#2</span>
                    </div>
                    <p>Launching the website.</p>
                  </div>
                </div>
                <div
                  className="
            roadmap roadmap-s5 roadmap-right roadmap-finished
          "
                >
                  <div className="roadmap-step roadmap-step-s5">
                    <div className="roadmap-head roadmap-head-s5">
                      <span className="roadmap-time roadmap-time-s5">#3</span>
                    </div>
                    <p>
                      Build ETCBayc community by launching Discord, Twitter,
                      Telegram and Medium. Start gathering the community.
                    </p>
                  </div>
                </div>
                <div
                  className="
            roadmap roadmap-s5 roadmap-left roadmap-finished
          "
                >
                  <div className="roadmap-step roadmap-step-s5">
                    <div className="roadmap-head roadmap-head-s5">
                      <span className="roadmap-time roadmap-time-s5">#4</span>
                    </div>
                    <p>
                      Opening the doors to the outside world, Launch minting!
                    </p>
                  </div>
                </div>
                <div className="roadmap roadmap-s5 roadmap-right">
                  <div className="roadmap-step roadmap-step-s5">
                    <div className="roadmap-head roadmap-head-s5">
                      <span className="roadmap-time roadmap-time-s5">#5</span>
                    </div>
                    <p>Marketing campaigns. we'll have amazing giveaways!</p>
                  </div>
                </div>
                <div className="roadmap roadmap-s5 roadmap-left">
                  <div className="roadmap-step roadmap-step-s5">
                    <div className="roadmap-head roadmap-head-s5">
                      <span className="roadmap-time roadmap-time-s5">#6</span>
                    </div>
                    <p>All ETCBaycs sold out!</p>
                  </div>
                </div>
                <div className="roadmap roadmap-s5 roadmap-right">
                  <div className="roadmap-step roadmap-step-s5">
                    <div className="roadmap-head roadmap-head-s5">
                      <span className="roadmap-time roadmap-time-s5">#7</span>
                    </div>
                    <p>Launching the Marketplace</p>
                  </div>
                </div>
                <div className="roadmap roadmap-s5 roadmap-left">
                  <div className="roadmap-step roadmap-step-s4">
                    <p className="text-center">
                      More details coming soon, Make sure to follow our
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://discord.gg/Hg3WH7Nxxq"
                      >
                        discord
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
