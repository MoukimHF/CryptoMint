import React from 'react'

function Main() {
    return (
        <div id="main" className="section banner banner-fs tc-light mt-30 pt-30 has-bg-image">
        <div className="nk-block nk-block-header nk-block-sm my-auto">
          <div className="container pt-5">
            <div className="banner-caption text-center">
              <h1 className="title title-xl-2 ttu">BORED APE YACHT CLUB ON</h1>
              <h1>
                <strong style={{color: 'rgb(51, 255, 153)'}}>
                  Ethereum Classic</strong>
              </h1>
              <div className="row justify-content-center pb-3">
                <div className="col-sm-11 col-xl-11 col-xxl-8">
                  <p className="lead">
                    After the success of
                    <a target="_blank" rel="noreferrer" href="https://boredapeyachtclub.com/#/"> Orginal Bayc Ethereum</a>
                    and BAYCTron. ETCBayc are now on Ethereum Classic! Don't
                    miss the chance to own them
                  </p>
                  <a
                      target="_blank"
                      rel="noreferrer"
                      class="btn mint_now text-sm md:text-xl font-light text-center px-2 py-4 md:px-8 md:py-6 rounded uppercase"
                    >
                      Mint
                    </a>
                  <p>
                    ETCBAYC is among the first high-quality art projects on
                    etc still nascent NFT landscape
                  </p>
                  <div className="pt-2 text-center">
                    <div className="cpn-action" style={{display: 'contents !important'}}>
                      <ul className="btn-grp mx-auto">
                        <ul className="cpn-links">
                          <li>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/alii.essa/"><em className="fab fa-instagram fa-2x" /></a>
                          </li>
                          <li>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/ali22essa"><em className="fab fa-twitter fa-2x" /></a>
                          </li>
                          <li>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ali-m-essa-9b7165223"><em className="fab fa-linkedin fa-2x" /></a>
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
        <div className="nk-block nk-block-status">
          <div className="container container-xxl">
            <div className="row gutter-vr-40px justify-content-between">
              <div className="col-xxl-6 col-xl-5 col-lg-5">
                <div className="progress-wrap progress-wrap-point">
                  <ul className="progress-info progress-info-s2">
                    <li>Remaining- <span>8049 Apes</span></li>
                    <li className="text-right">
                      All - <span>10,000 Apes </span>
                    </li>
                  </ul>
                  <div className="progress-bar progress-bar-xs">
                    <div className="progress-percent progress-percent-s2" style={{width: '19.51%'}} />
                    <div className="progress-point" style={{left: '19.51%'}}>
                      <a href="/mint" className="btn btn-primary btn-round">Mint</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-7 text-center text-sm-left">
                <div className="row justify-content-around gutter-vr-30px">
                  <div className="col-sm-4 col-md-6 col-lg-4 col-xl-5">
                    <div className="status-info">
                      <h6 className="title title-xxs tc-default status-title ttu">
                        Mint Percent
                      </h6>
                      <h3 className="fz-3 fw-3 status-percent">19.51%</h3>
                      <div className="fz-8">
                        Mint Before All Gone (Minted: 1951)
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8 col-md-6 col-lg-7 col-xl-7">
                    <a target="_blank" rel="noreferrer" href="https://blockscout.com/etc/mainnet/address/0x59E34EF31049565D041Aec6137F40f518c2D47c1/contracts" className="ml-5 link"><h6 className="title title-xxs tc-default status-title ttu">
                        <em className="link-icon fas fa-file" /><span> ETCBayc Contract</span>
                      </h6></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-overlay="theme" data-opacity={85} className="
      bg-image
      overlay overlay-theme overlay-opacity-85
      bg-image-loaded
    " style={{backgroundImage: 'url("/images/bg/multi.png")'}}>
          <img src="/images/bg/multi.png" alt="" />
        </div>
        <div className="nk-block nk-block-actions">
          <div className="container container-xxl">
            <div className="row gutter-vr-40px align-items-center">
              <div className="
            col-sm-7
            d-flex
            justify-content-center justify-content-sm-start
          ">
                <ul className="
              btn-grp btn-grp-break
              justify-content-center justify-content-sm-start
              gutter-vr-20px
            ">
                  <li>
                    <a href="#faqs" className="link link-light link-break"><em className="icon-circle icon-border far fa-lightbulb" /><span>Why buy ETCBayc now?</span></a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-5">
                <ul className="
              social-links social-links-s2
              justify-content-center justify-content-sm-end
            ">
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/alii.essa/"><em className="fab fa-instagram" /></a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/ali22essa "><em className="fab fa-twitter" /></a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ali-m-essa-9b7165223"><em className="fab fa-linkedin" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-bg" className="particles-container is-fixed particles-bg op-20">
          <canvas className="particles-js-canvas-el" style={{width: '100%', height: '100%'}} width={1351} height={942} />
        </div>
      </div>
    )
}

export default Main
