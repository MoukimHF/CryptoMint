import React from "react";

function Ecosystem() {
  return (
    <section id="ecosystems" className="section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                data-delay="0.1"
                title="Core Ecosystems"
                className="title title-xl"
              >
                ECOSYSTEMS
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block has-bg-image">
          <div className="row text-center align-items-lg-start gutter-vr-40px">
            <div className="col-lg-3 col-sm-6">
              <div data-delay="0.3" className="feature feature-s6 feature-s6-1">
                <div className="feature-text">
                  <h5 className="title title-sm ttu">MARKETPLACE</h5>
                  <p>
                    Market place where you can trade your Classic Bored Apes
                    Yacht Club
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div data-delay="0.4" className="feature feature-s6 feature-s6-2">
                <div className="feature-text">
                  <h5 className="title title-sm ttu">ERC-721</h5>
                  <p>
                    The apes are stored as ERC-721 tokens on the Ethereum
                    Classic blockchain and hosted on IPFS. Purchasing an ape
                    costs 2 ETC.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div data-delay="0.5" className="feature feature-s6 feature-s6-3">
                <div className="feature-text">
                  <h5 className="title title-sm ttu">Fair Launch</h5>
                  <p>Fair Launch, fair distribution</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div data-delay="0.6" className="feature feature-s6 feature-s6-4">
                <div className="feature-text">
                  <h5 className="title title-sm ttu">Rarity</h5>
                  <p>10,000 Provably-rare Bored Ape tokens.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-delay="0.2"
            className="
          bg-image bg-contain bg-bottom-center bg-ecosystems
          d-none d-sm-block
          overlay-fall
          bg-image-loaded
        "
            style={{ backgroundImage: 'url("/images/globe-particle.png")' }}
          >
            <img src="/images/globe-particle.png" alt="globe" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
