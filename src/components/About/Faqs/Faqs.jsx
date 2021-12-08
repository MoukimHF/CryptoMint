import React from 'react'
import AnimatedText from '../../AnimatedText'

function Faqs({faqsRef}) {
    return (
        <section ref={faqsRef} id="faqs"  className="section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2 data-delay="0.1" title="FAQS" className="title title-xl roadmap__gelato">
                  <AnimatedText text="FAQS" effect="jump" duration={7}  />

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
                       What are NFTS?<span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-1" data-parent="#acc-1" className="collapse show">
                        <div className="accordion-content">
                          <p>
                          A non-fungible token is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be associated with easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to give the NFT a public proof of ownership
                          </p>
                        </div>
                      </div>
                    </div>
                    <div data-delay="0.5" className="accordion-item accordion-item-s3">
                      <h5 data-toggle="collapse" data-target="#acc-1-2" className="
                    accordion-title accordion-title-sm
                    collapsed
                  ">
                        What is $ETC ??
                        <span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-2" data-parent="#acc-1" className="collapse">
                        <div className="accordion-content">
                          <p>
                          Ethereum Classic is the original Ethereum blockchain, an open source, blockchain-based distributed computing platform featuring smart contract functionality. It supports a modified version of Nakamoto consensus via transaction-based state transitions executed on a public Ethereum Virtual Machine.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div data-delay="0.5" className="accordion-item accordion-item-s3">
                      <h5 data-toggle="collapse" data-target="#acc-1-3" className="
                    accordion-title accordion-title-sm
                    collapsed
                  ">
                        How much do Classic Pharaohs cost?
                        <span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-3" data-parent="#acc-1" className="collapse">
                        <div className="accordion-content">
                          <p>
                            1 Classic Pharaoh goes for 2 $ETC
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
                       How do I get a Classic Pharaoh?
                        <span className="accordion-icon" />
                      </h5>
                      <div id="acc-1-4" data-parent="#acc-1" className="collapse">
                        <div className="accordion-content">
                          <p>
                          To Mint you first need to connect your compatible wallet or access our site from your wallets address and click Mint and voila!!
                            <a href="/mint" className>Mint Now</a>
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
