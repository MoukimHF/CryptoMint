import React from 'react'

function Contact({contactRef}) {
    return (
        <section ref={contactRef} id="contact" className="section">
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
                     The Founder:
                    </h2>
                    <p data-delay="0.8">
                    Our founder is Ali Essa, a young college student that is extremely passionate about Ethereum Classic, He is of Egyptian descent and currently resides in the United States he has always been interested in CryptoCurrency and NFTS and most importantly $ETC, he is currently working as an operations manager for multiple businesses and he is planning to pursue a degree in Software engineering due to his extreme interest in software 
                    </p>
                    {/* <h3 className="text-white">Contract Address</h3>
                    <a target="_blank" rel="noreferrer" href="https://blockscout.com/etc/mainnet/address/0x59E34EF31049565D041Aec6137F40f518c2D47c1/contracts"><strong>
                    0x59E34EF31049565D041Aec6137F40f518c2D47c1
                      </strong></a>
                    <a style={{cursor: 'pointer'}}><em className="contact-icon fas fa-copy" /></a> */}
                  </div>
                </div>
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
                        <span>info@Classic Pharaohs .com</span>
                      </div>
                    </li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/alii.essa/"><li data-delay="0.4">
                        <em className="contact-icon fab fa-instagram" />
                        <div className="contact-text">
                          <span>Join us on Instagram</span>
                        </div>
                      </li></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/ali22essa"><li data-delay="0.4">
                        <em className="contact-icon fab fa-twitter" />
                        <div className="contact-text">
                          <span>Join us on Twitter</span>
                        </div>
                      </li></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ali-m-essa-9b7165223"><li data-delay="0.4">
                        <em className="contact-icon fab fa-linkedin" />
                        <div className="contact-text">
                          <span>Join us on Linkedin</span>
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
      </section>
    )
}

export default Contact
