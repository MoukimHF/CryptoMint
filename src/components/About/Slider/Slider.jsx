import React from "react";

function Slider() {
  return (
    <div className="container container-xxl">
      <div className="nk-block">
        <div
          data-items={4}
          data-navs="true"
          className="
        has-carousel
        carousel-nav-center
        owl-carousel owl-loaded owl-drag
      "
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "1440px",
              }}
            >
              <div
                className="owl-item active"
                style={{ width: "210px", marginRight: "30px" }}
              >
                <div className="item">
                  <div className="team team-s1 team-odd">
                    <div className="team-photo team-photo-s3">
                      <img
                        src="/assets/BaycImages/etc/1.png"
                        alt="ETCBayc #0"
                      />
                      <a
                        href="#team-popup-1"
                        className="team-show content-popup"
                      />
                    </div>
                    <h5 className="team-name title title-md"># 1</h5>
                    <span className="team-position">ETCBayc</span>
                    <ul className="team-social team-social-s2">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://t.me/etcbayc"
                        >
                          <em className="fab fa-telegram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/etcbayc"
                        >
                          <em className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://discord.gg/Hg3WH7Nxxq"
                        >
                          <em className="fab fa-discord" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://medium.com/@etcbayc"
                        >
                          <em className="fab fa-medium-m" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="team-popup-1"
                    className="team-popup bg-theme-dark tc-light mfp-hide"
                  >
                    <a title="Close" className="mfp-close">
                      ×
                    </a>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div className="team-photo">
                          <div data-v-1e5eda20 className="vci-container">
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/etc/1.png"
                              className="left-image"
                              alt="ETCBayc #0"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <div
                              data-v-1e5eda20
                              className="left-label"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/ext/1.png"
                              className="right-image"
                              alt="ETCBayc #0"
                            />
                            <div data-v-1e5eda20 className="right-label" />
                            <div
                              data-v-1e5eda20
                              className="vci-slider"
                              style={{
                                cursor: "ew-resize",
                                left: "183px",
                                width: "40px",
                              }}
                            >
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                              <div
                                data-v-1e5eda20
                                className="handle"
                                style={{
                                  border: "2px solid white",
                                  height: "40px",
                                  width: "40px",
                                }}
                              >
                                <div
                                  data-v-1e5eda20
                                  className="left-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset solid inset",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) white rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)",
                                    borderImage: "initial",
                                    marginLeft: "-10px",
                                    marginRight: "10px",
                                  }}
                                />
                                <div
                                  data-v-1e5eda20
                                  className="right-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset inset inset solid",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white",
                                    borderImage: "initial",
                                    marginRight: "-10px",
                                  }}
                                />
                              </div>
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                            </div>
                            <div
                              dir="ltr"
                              className="resize-sensor"
                              style={{
                                pointerEvents: "none",
                                position: "absolute",
                                inset: "0px",
                                overflow: "hidden",
                                zIndex: -1,
                                visibility: "hidden",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="resize-sensor-expand"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                  }}
                                />
                              </div>
                              <div
                                className="resize-sensor-shrink"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                    width: "200%",
                                    height: "200%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="team-popup-info pl-md-3">
                          <h3 className="team-name title title-lg pt-4"># 1</h3>
                          <p className="team-position">ETCBayc</p>
                          <ul className="team-social team-social-s2 mb-4">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://t.me/etcbayc"
                              >
                                <em className="fab fa-telegram" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/etcbayc"
                              >
                                <em className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.gg/Hg3WH7Nxxq"
                              >
                                <em className="fab fa-discord" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/@etcbayc"
                              >
                                <em className="fab fa-medium-m" />
                              </a>
                            </li>
                          </ul>
                          <p>
                            The Bored Ape Yacht Club (BAYC) is an
                            Ethereum-Classic-based NFT collection of 10,000
                            unique Bored Apes. Each Bored Ape has a basket of
                            traits programmatically generated from over 170
                            traits, including expression, clothing, headware,
                            and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "210px", marginRight: "30px" }}
              >
                <div className="item">
                  <div className="team team-s1 team-even">
                    <div className="team-photo team-photo-s3">
                      <img
                        src="/assets/BaycImages/etc/150.png"
                        alt="ETCBayc #150"
                      />
                      <a
                        href="#team-popup-2"
                        className="team-show content-popup"
                      />
                    </div>
                    <h5 className="team-name title title-md"># 150</h5>
                    <span className="team-position">ETCBayc</span>
                    <ul className="team-social team-social-s2">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://t.me/etcbayc"
                        >
                          <em className="fab fa-telegram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/etcbayc"
                        >
                          <em className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://discord.gg/Hg3WH7Nxxq"
                        >
                          <em className="fab fa-discord" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://medium.com/@etcbayc"
                        >
                          <em className="fab fa-medium-m" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="team-popup-2"
                    className="team-popup bg-theme-dark tc-light mfp-hide"
                  >
                    <a title="Close" className="mfp-close">
                      ×
                    </a>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div className="team-photo">
                          <div data-v-1e5eda20 className="vci-container">
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/etc/150.png"
                              className="left-image"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <div
                              data-v-1e5eda20
                              className="left-label"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/ext/150.png"
                              className="right-image"
                              alt="ETCBayc #150"
                            />
                            <div data-v-1e5eda20 className="right-label" />
                            <div
                              data-v-1e5eda20
                              className="vci-slider"
                              style={{
                                cursor: "ew-resize",
                                left: "183px",
                                width: "40px",
                              }}
                            >
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                              <div
                                data-v-1e5eda20
                                className="handle"
                                style={{
                                  border: "2px solid white",
                                  height: "40px",
                                  width: "40px",
                                }}
                              >
                                <div
                                  data-v-1e5eda20
                                  className="left-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset solid inset inset",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) white rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)",
                                    borderImage: "initial",
                                    marginLeft: "-10px",
                                    marginRight: "10px",
                                  }}
                                />
                                <div
                                  data-v-1e5eda20
                                  className="right-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset inset inset solid",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white",
                                    borderImage: "initial",
                                    marginRight: "-10px",
                                  }}
                                />
                              </div>
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                            </div>
                            <div
                              dir="ltr"
                              className="resize-sensor"
                              style={{
                                pointerEvents: "none",
                                position: "absolute",
                                inset: "0px",
                                overflow: "hidden",
                                zIndex: -1,
                                visibility: "hidden",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="resize-sensor-expand"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                  }}
                                />
                              </div>
                              <div
                                className="resize-sensor-shrink"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                    width: "200%",
                                    height: "200%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="team-popup-info pl-md-3">
                          <h3 className="team-name title title-lg pt-4">
                            # 150
                          </h3>
                          <p className="team-position">ETCBayc</p>
                          <ul className="team-social team-social-s2 mb-4">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://t.me/etcbayc"
                              >
                                <em className="fab fa-telegram" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/etcbayc"
                              >
                                <em className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.gg/Hg3WH7Nxxq"
                              >
                                <em className="fab fa-discord" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/@etcbayc"
                              >
                                <em className="fab fa-medium-m" />
                              </a>
                            </li>
                          </ul>
                          <p>
                            The Bored Ape Yacht Club (BAYC) is an
                            Ethereum-Classic-based NFT collection of 10,000
                            unique Bored Apes. Each Bored Ape has a basket of
                            traits programmatically generated from over 170
                            traits, including expression, clothing, headware,
                            and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "210px", marginRight: "30px" }}
              >
                <div className="item">
                  <div className="team team-s1 team-odd">
                    <div className="team-photo team-photo-s3">
                      <img
                        src="/assets/BaycImages/etc/2500.png"
                        alt="ETCBayc #2500"
                      />
                      <a
                        href="#team-popup-3"
                        className="team-show content-popup"
                      />
                    </div>
                    <h5 className="team-name title title-md"># 2500</h5>
                    <span className="team-position">ETCBayc</span>
                    <ul className="team-social team-social-s2">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://t.me/etcbayc"
                        >
                          <em className="fab fa-telegram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/etcbayc"
                        >
                          <em className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://discord.gg/Hg3WH7Nxxq"
                        >
                          <em className="fab fa-discord" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://medium.com/@etcbayc"
                        >
                          <em className="fab fa-medium-m" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="team-popup-3"
                    className="team-popup bg-theme-dark tc-light mfp-hide"
                  >
                    <a title="Close" className="mfp-close">
                      ×
                    </a>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div className="team-photo">
                          <div data-v-1e5eda20 className="vci-container">
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/etc/2500.png"
                              className="left-image"
                              alt="ETCBayc #2500"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <div
                              data-v-1e5eda20
                              className="left-label"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/ext/2500.png"
                              className="right-image"
                              alt="ETCBayc #2500"
                            />
                            <div data-v-1e5eda20 className="right-label" />
                            <div
                              data-v-1e5eda20
                              className="vci-slider"
                              style={{
                                cursor: "ew-resize",
                                left: "183px",
                                width: "40px",
                              }}
                            >
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                              <div
                                data-v-1e5eda20
                                className="handle"
                                style={{
                                  border: "2px solid white",
                                  height: "40px",
                                  width: "40px",
                                }}
                              >
                                <div
                                  data-v-1e5eda20
                                  className="left-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset solid inset inset",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) white rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)",
                                    borderImage: "initial",
                                    marginLeft: "-10px",
                                    marginRight: "10px",
                                  }}
                                />
                                <div
                                  data-v-1e5eda20
                                  className="right-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset inset inset solid",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white",
                                    borderImage: "initial",
                                    marginRight: "-10px",
                                  }}
                                />
                              </div>
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                            </div>
                            <div
                              dir="ltr"
                              className="resize-sensor"
                              style={{
                                pointerEvents: "none",
                                position: "absolute",
                                inset: "0px",
                                overflow: "hidden",
                                zIndex: -1,
                                visibility: "hidden",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="resize-sensor-expand"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                  }}
                                />
                              </div>
                              <div
                                className="resize-sensor-shrink"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                    width: "200%",
                                    height: "200%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="team-popup-info pl-md-3">
                          <h3 className="team-name title title-lg pt-4">
                            # 2500
                          </h3>
                          <p className="team-position">ETCBayc</p>
                          <ul className="team-social team-social-s2 mb-4">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://t.me/etcbayc"
                              >
                                <em className="fab fa-telegram" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/etcbayc"
                              >
                                <em className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.gg/Hg3WH7Nxxq"
                              >
                                <em className="fab fa-discord" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/@etcbayc"
                              >
                                <em className="fab fa-medium-m" />
                              </a>
                            </li>
                          </ul>
                          <p>
                            The Bored Ape Yacht Club (BAYC) is an
                            Ethereum-Classic-based NFT collection of 10,000
                            unique Bored Apes. Each Bored Ape has a basket of
                            traits programmatically generated from over 170
                            traits, including expression, clothing, headware,
                            and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "210px", marginRight: "30px" }}
              >
                <div className="item">
                  <div className="team team-s1 team-even">
                    <div className="team-photo team-photo-s3">
                      <img
                        src="/assets/BaycImages/etc/4585.png"
                        alt="ETCBayc #4585"
                      />
                      <a
                        href="#team-popup-4"
                        className="team-show content-popup"
                      />
                    </div>
                    <h5 className="team-name title title-md"># 4585</h5>
                    <span className="team-position">ETCBayc</span>
                    <ul className="team-social team-social-s2">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://t.me/etcbayc"
                        >
                          <em className="fab fa-telegram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/etcbayc"
                        >
                          <em className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://discord.gg/Hg3WH7Nxxq"
                        >
                          <em className="fab fa-discord" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://medium.com/@etcbayc"
                        >
                          <em className="fab fa-medium-m" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="team-popup-4"
                    className="team-popup bg-theme-dark tc-light mfp-hide"
                  >
                    <a title="Close" className="mfp-close">
                      ×
                    </a>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div className="team-photo">
                          <div data-v-1e5eda20 className="vci-container">
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/etc/4585.png"
                              className="left-image"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <div
                              data-v-1e5eda20
                              className="left-label"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/ext/4585.png"
                              className="right-image"
                            />
                            <div data-v-1e5eda20 className="right-label" />
                            <div
                              data-v-1e5eda20
                              className="vci-slider"
                              style={{
                                cursor: "ew-resize",
                                left: "183px",
                                width: "40px",
                              }}
                            >
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                              <div
                                data-v-1e5eda20
                                className="handle"
                                style={{
                                  border: "2px solid white",
                                  height: "40px",
                                  width: "40px",
                                }}
                              >
                                <div
                                  data-v-1e5eda20
                                  className="left-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset solid inset inset",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) white rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)",
                                    borderImage: "initial",
                                    marginLeft: "-10px",
                                    marginRight: "10px",
                                  }}
                                />
                                <div
                                  data-v-1e5eda20
                                  className="right-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset inset inset solid",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white",
                                    borderImage: "initial",
                                    marginRight: "-10px",
                                  }}
                                />
                              </div>
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                            </div>
                            <div
                              dir="ltr"
                              className="resize-sensor"
                              style={{
                                pointerEvents: "none",
                                position: "absolute",
                                inset: "0px",
                                overflow: "hidden",
                                zIndex: -1,
                                visibility: "hidden",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="resize-sensor-expand"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                  }}
                                />
                              </div>
                              <div
                                className="resize-sensor-shrink"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                    width: "200%",
                                    height: "200%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="team-popup-info pl-md-3">
                          <h3 className="team-name title title-lg pt-4">
                            # 4585
                          </h3>
                          <p className="team-position">ETCBayc</p>
                          <ul className="team-social team-social-s2 mb-4">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://t.me/etcbayc"
                              >
                                <em className="fab fa-telegram" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/etcbayc"
                              >
                                <em className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.gg/Hg3WH7Nxxq"
                              >
                                <em className="fab fa-discord" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/@etcbayc"
                              >
                                <em className="fab fa-medium-m" />
                              </a>
                            </li>
                          </ul>
                          <p>
                            The Bored Ape Yacht Club (BAYC) is an
                            Ethereum-Classic-based NFT collection of 10,000
                            unique Bored Apes. Each Bored Ape has a basket of
                            traits programmatically generated from over 170
                            traits, including expression, clothing, headware,
                            and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "210px", marginRight: "30px" }}
              >
                <div className="item">
                  <div className="team team-s1 team-odd">
                    <div className="team-photo team-photo-s3">
                      <img
                        src="/assets/BaycImages/etc/6890.png"
                        alt="ETCBayc #6890"
                      />
                      <a
                        href="#team-popup-5"
                        className="team-show content-popup"
                      />
                    </div>
                    <h5 className="team-name title title-md"># 6890</h5>
                    <span className="team-position">ETCBayc</span>
                    <ul className="team-social team-social-s2">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://t.me/etcbayc"
                        >
                          <em className="fab fa-telegram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/etcbayc"
                        >
                          <em className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://discord.gg/Hg3WH7Nxxq"
                        >
                          <em className="fab fa-discord" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://medium.com/@etcbayc"
                        >
                          <em className="fab fa-medium-m" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="team-popup-5"
                    className="team-popup bg-theme-dark tc-light mfp-hide"
                  >
                    <a title="Close" className="mfp-close">
                      ×
                    </a>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div className="team-photo">
                          <div data-v-1e5eda20 className="vci-container">
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/etc/6890.png"
                              className="left-image"
                              alt="ETCBayc #6890"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <div
                              data-v-1e5eda20
                              className="left-label"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/ext/6890.png"
                              className="right-image"
                              alt="ETCBayc #6890"
                            />
                            <div data-v-1e5eda20 className="right-label" />
                            <div
                              data-v-1e5eda20
                              className="vci-slider"
                              style={{
                                cursor: "ew-resize",
                                left: "183px",
                                width: "40px",
                              }}
                            >
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                              <div
                                data-v-1e5eda20
                                className="handle"
                                style={{
                                  border: "2px solid white",
                                  height: "40px",
                                  width: "40px",
                                }}
                              >
                                <div
                                  data-v-1e5eda20
                                  className="left-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset solid inset inset",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) white rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)",
                                    borderImage: "initial",
                                    marginLeft: "-10px",
                                    marginRight: "10px",
                                  }}
                                />
                                <div
                                  data-v-1e5eda20
                                  className="right-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset inset inset solid",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white",
                                    borderImage: "initial",
                                    marginRight: "-10px",
                                  }}
                                />
                              </div>
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                            </div>
                            <div
                              dir="ltr"
                              className="resize-sensor"
                              style={{
                                pointerEvents: "none",
                                position: "absolute",
                                inset: "0px",
                                overflow: "hidden",
                                zIndex: -1,
                                visibility: "hidden",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="resize-sensor-expand"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                  }}
                                />
                              </div>
                              <div
                                className="resize-sensor-shrink"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                    width: "200%",
                                    height: "200%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="team-popup-info pl-md-3">
                          <h3 className="team-name title title-lg pt-4">
                            # 6890
                          </h3>
                          <p className="team-position">ETCBayc</p>
                          <ul className="team-social team-social-s2 mb-4">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://t.me/etcbayc"
                              >
                                <em className="fab fa-telegram" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/etcbayc"
                              >
                                <em className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.gg/Hg3WH7Nxxq"
                              >
                                <em className="fab fa-discord" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/@etcbayc"
                              >
                                <em className="fab fa-medium-m" />
                              </a>
                            </li>
                          </ul>
                          <p>
                            The Bored Ape Yacht Club (BAYC) is an
                            Ethereum-Classic-based NFT collection of 10,000
                            unique Bored Apes. Each Bored Ape has a basket of
                            traits programmatically generated from over 170
                            traits, including expression, clothing, headware,
                            and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "210px", marginRight: "30px" }}
              >
                <div className="item">
                  <div className="team team-s1 team-even">
                    <div className="team-photo team-photo-s3">
                      <img
                        src="/assets/BaycImages/etc/7325.png"
                        alt="ETCBayc #7325"
                      />
                      <a
                        href="#team-popup-6"
                        className="team-show content-popup"
                      />
                    </div>
                    <h5 className="team-name title title-md"># 7325</h5>
                    <span className="team-position">ETCBayc</span>
                    <ul className="team-social team-social-s2">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://t.me/etcbayc"
                        >
                          <em className="fab fa-telegram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://twitter.com/etcbayc"
                        >
                          <em className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://discord.gg/Hg3WH7Nxxq"
                        >
                          <em className="fab fa-discord" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://medium.com/@etcbayc"
                        >
                          <em className="fab fa-medium-m" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="team-popup-6"
                    className="team-popup bg-theme-dark tc-light mfp-hide"
                  >
                    <a title="Close" className="mfp-close">
                      ×
                    </a>
                    <div className="row align-items-start">
                      <div className="col-md-6">
                        <div className="team-photo">
                          <div data-v-1e5eda20 className="vci-container">
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/etc/7325.png"
                              className="left-image"
                              alt="ETCBayc #7325"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <div
                              data-v-1e5eda20
                              className="left-label"
                              style={{ clip: "rect(auto, 203px, auto, auto)" }}
                            />
                            <img
                              data-v-1e5eda20
                              src="/assets/BaycImages/ext/7325.png"
                              className="right-image"
                            />
                            <div data-v-1e5eda20 className="right-label" />
                            <div
                              data-v-1e5eda20
                              className="vci-slider"
                              style={{
                                cursor: "ew-resize",
                                left: "183px",
                                width: "40px",
                              }}
                            >
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                              <div
                                data-v-1e5eda20
                                className="handle"
                                style={{
                                  border: "2px solid white",
                                  height: "40px",
                                  width: "40px",
                                }}
                              >
                                <div
                                  data-v-1e5eda20
                                  className="left-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset solid inset inset",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) white rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)",
                                    borderImage: "initial",
                                    marginLeft: "-10px",
                                    marginRight: "10px",
                                  }}
                                />
                                <div
                                  data-v-1e5eda20
                                  className="right-arrow"
                                  style={{
                                    borderWidth: "6px",
                                    borderStyle: "inset inset inset solid",
                                    borderColor:
                                      "rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) white",
                                    borderImage: "initial",
                                    marginRight: "-10px",
                                  }}
                                />
                              </div>
                              <div
                                data-v-1e5eda20
                                className="line"
                                style={{ width: "2px" }}
                              />
                            </div>
                            <div
                              dir="ltr"
                              className="resize-sensor"
                              style={{
                                pointerEvents: "none",
                                position: "absolute",
                                inset: "0px",
                                overflow: "hidden",
                                zIndex: -1,
                                visibility: "hidden",
                                maxWidth: "100%",
                              }}
                            >
                              <div
                                className="resize-sensor-expand"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                  }}
                                />
                              </div>
                              <div
                                className="resize-sensor-shrink"
                                style={{
                                  pointerEvents: "none",
                                  position: "absolute",
                                  inset: "0px",
                                  overflow: "hidden",
                                  zIndex: -1,
                                  visibility: "hidden",
                                  maxWidth: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    transition: "all 0s ease 0s",
                                    width: "200%",
                                    height: "200%",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="team-popup-info pl-md-3">
                          <h3 className="team-name title title-lg pt-4">
                            # 7325
                          </h3>
                          <p className="team-position">ETCBayc</p>
                          <ul className="team-social team-social-s2 mb-4">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://t.me/etcbayc"
                              >
                                <em className="fab fa-telegram" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/etcbayc"
                              >
                                <em className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://discord.gg/Hg3WH7Nxxq"
                              >
                                <em className="fab fa-discord" />
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/@etcbayc"
                              >
                                <em className="fab fa-medium-m" />
                              </a>
                            </li>
                          </ul>
                          <p>
                            The Bored Ape Yacht Club (BAYC) is an
                            Ethereum-Classic-based NFT collection of 10,000
                            unique Bored Apes. Each Bored Ape has a basket of
                            traits programmatically generated from over 170
                            traits, including expression, clothing, headware,
                            and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-dots disabled" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
