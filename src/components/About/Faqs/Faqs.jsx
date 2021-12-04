import React from 'react'

function Faqs() {
    return (
        <section id="faqs" className="section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2 data-delay="0.1" title="FAQS" className="title title-xl">
                  FAQS
                </h2>
              </div>
            </div>
          </div>
          <div className="nk-block">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tab-content">
                  <div id="acc-1" className="accordion">
                    <div data-delay="0.4" className="accordion-item accordion-item-s3 current">
                      <h5 data-toggle="collapse" data-target="#acc-1-1" className="accordion-title accordion-title-sm">
                        What is the ETCBayc project?<span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-1" data-parent="#acc-1" className="collapse show">
                        <div className="accordion-content">
                          <p>
                            ETCBayc, is an exclusive 10,000 only mint-able
                            premium NFT. No two pieces of these 10,000
                            digital beauties are alike. Each being unique
                            and pristine, there is an order of rarity that
                            makes certain ones more valuable than the
                            others. each Bored Ape is inspired by its
                            Ethereum counterpart.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div data-delay="0.5" className="accordion-item accordion-item-s3">
                      <h5 data-toggle="collapse" data-target="#acc-1-2" className="
                    accordion-title accordion-title-sm
                    collapsed
                  ">
                        What is an NFT?
                        <span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-2" data-parent="#acc-1" className="collapse">
                        <div className="accordion-content">
                          <p>
                            Non Fungible Token, replace Fungible to
                            Replaceable. There you get it! It is unique
                            one of kind item that is provably rare. Think
                            baseball cards on steroids.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div data-delay="0.5" className="accordion-item accordion-item-s3">
                      <h5 data-toggle="collapse" data-target="#acc-1-3" className="
                    accordion-title accordion-title-sm
                    collapsed
                  ">
                        How much does an ape cost?
                        <span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-3" data-parent="#acc-1" className="collapse">
                        <div className="accordion-content">
                          <p>
                            Each ape costs 2 ETC (+gas) with a maximum
                            mintage of 20 Apes. Find out more about our
                            Mint Time in our
                            <a target="_blank" rel="noreferrer" href="https://discord.gg/Hg3WH7Nxxq">Discord</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div data-delay="0.5" className="accordion-item accordion-item-s3">
                      <h5 data-toggle="collapse" data-target="#acc-1-4" className="
                    accordion-title accordion-title-sm
                    collapsed
                  ">
                        How do I purchase an Ape?
                        <span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-4" data-parent="#acc-1" className="collapse">
                        <div className="accordion-content">
                          <p>
                            You will be able to mint directly on our
                            website, using Metamask.
                            <a href="/mint" className>Mint Now</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div data-delay="0.5" className="accordion-item accordion-item-s3">
                      <h5 data-toggle="collapse" data-target="#acc-1-5" className="
                    accordion-title accordion-title-sm
                    collapsed
                  ">
                        How do I use Metamask?
                        <span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-5" data-parent="#acc-1" className="collapse">
                        <div className="accordion-content">
                          <p>
                            just head straight to the source
                            <a target="_blank" rel="noreferrer" href="https://metamask.io/">https://metamask.io/</a>
                          </p>
                          <p>
                            How to view ETC Ethereum Classic token on
                            Metamask
                            <a target="_blank" rel="noreferrer" href="https://metamask.zendesk.com/hc/en-us/articles/360058809292-How-to-view-ETC-Ethereum-Classic-token-">Click here</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div data-delay="0.5" className="accordion-item accordion-item-s3">
                      <h5 data-toggle="collapse" data-target="#acc-1-6" className="
                    accordion-title accordion-title-sm
                    collapsed
                  ">
                        Anything else I should know?
                        <span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-6" data-parent="#acc-1" className="collapse">
                        <div className="accordion-content">
                          <p>
                            Yup, you need some ETC. You can buy it on
                            Coinbase or even directly from the Metamask
                            Wallet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Faqs
