import React from 'react'

function Contact() {
    return (
        <section id="contact" className="section">
        <div className="container">
          <div className="nk-block nk-block-about">
            <div className="
          row
          justify-content-between
          align-items-center
          gutter-vr-50px
        ">
              <div className="col-lg-6">
                <div className="nk-block-text">
                  <div className="nk-block-text-head">
                    <h2 data-delay="0.7" className="title title-lg ttu">
                      Contact Us
                    </h2>
                    <p data-delay="0.8">
                      If you have any questions or encounter any trouble ,
                      please do not hesitate to contact us through our
                      official social media channels. Our team will be
                      happy to help you as soon as possible..
                    </p>
                    <h3 className="text-white">Contract Address</h3>
                    <a target="_blank" rel="noreferrer" href="https://blockscout.com/etc/mainnet/address/0x59E34EF31049565D041Aec6137F40f518c2D47c1/contracts"><strong>0x59E34EF31049565D041Aec6137F40f518c2D47c1</strong></a>
                    <a style={{cursor: 'pointer'}}><em className="contact-icon fas fa-copy" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 text-center order-lg-first">
                <div data-delay="0.1" className="nk-block-contact nk-block-contact-s1">
                  <ul className="contact-list">
                    <li data-delay="0.3">
                      <em className="contact-icon fas fa-envelope" />
                      <div className="contact-text">
                        <span>info@etcbayc.com</span>
                      </div>
                    </li>
                    <a target="_blank" rel="noreferrer" href="https://t.me/etcbayc"><li data-delay="0.4">
                        <em className="contact-icon fas fa-paper-plane" />
                        <div className="contact-text">
                          <span>Join us on Telegram</span>
                        </div>
                      </li></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/etcbayc"><li data-delay="0.4">
                        <em className="contact-icon fab fa-twitter" />
                        <div className="contact-text">
                          <span>Join us on Twitter</span>
                        </div>
                      </li></a>
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/Hg3WH7Nxxq"><li data-delay="0.4">
                        <em className="contact-icon fab fa-discord" />
                        <div className="contact-text">
                          <span>Join us on Discord</span>
                        </div>
                      </li></a>
                    <a target="_blank" rel="noreferrer" href="https://medium.com/@etcbayc"><li data-delay="0.4">
                        <em className="contact-icon fab fa-medium-m" />
                        <div className="contact-text">
                          <span>Join us on Medium</span>
                        </div>
                      </li></a>
                  </ul>
                  <div className="
                nk-circle-animation nk-df-center
                text-primary
                small
              " />
                </div>
                <ul data-delay="0.6" className="
              social-links social-links-s2
              justify-content-center
            ">
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://t.me/etcbayc"><em className="fab fa-telegram" /></a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/etcbayc"><em className="fab fa-twitter" /></a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/Hg3WH7Nxxq"><em className="fab fa-discord" /></a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://medium.com/@etcbayc"><em className="fab fa-medium-m" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact
