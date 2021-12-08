import React from "react";
import Countdown from "../Countdown/Countdown";
function Main() {

  return (
    <div
      id="main"
      className="section banner banner-fs tc-light mt-30 pt-30 has-bg-image"
    >
      <div className="nk-block nk-block-header nk-block-sm my-auto">
        <div className="container pt-5">
          <div className="banner-caption text-center">
            <h1 className="title title-xl-2 ttu">Classic Pharaohs ON</h1>
            <h1>
              <strong style={{ color: "rgb(51, 255, 153)" }}>
                Ethereum Classic
              </strong>
            </h1>
            <div className="row justify-content-center pb-3">
              <div className="col-sm-11 col-xl-11 col-xxl-8">
                <p className="lead">
                  Classic Pharaohs are now on Ethereum Classic! Don't miss
                  the chance to own them
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn mint_now text-sm md:text-xl font-light text-center px-2 py-4 md:px-8 md:py-6 rounded uppercase"
                >
                  Mint
                </a>
                <Countdown />
                <div className="pt-2 text-center">
                  <div
                    className="cpn-action"
                    style={{ display: "contents !important" }}
                  >
                    <ul className="btn-grp mx-auto">
                      <ul className="cpn-links">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/alii.essa/"
                          >
                            <em className="fab fa-instagram fa-2x" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/ali22essa"
                          >
                            <em className="fab fa-twitter fa-2x" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/ali-m-essa-9b7165223"
                          >
                            <em className="fab fa-linkedin fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="/mint" className="btn btn-outline btn-primary">
              Minting is live
              <h4 className="p-10 pl-2 pr-2">8049</h4>
              /10000 remaining
            </a>
          </div>
        </div>
      </div>
   
      <div
        data-overlay="theme"
        data-opacity={85}
        className="
      bg-image
      overlay
      bg-image-loaded
    "
        style={{ backgroundImage: 'url("/images/bg/bg.jpg")' }}
      >
        <img src="/images/bg/bg.jpg" alt="" />
      </div>
   
      <div
        id="particles-bg"
        className="particles-container is-fixed particles-bg op-20"
      >
        <canvas
          className="particles-js-canvas-el"
          style={{ width: "100%", height: "100%" }}
          width={1351}
          height={942}
        />
      </div>
    </div>
  );
}

export default Main;
