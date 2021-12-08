import React from "react";

function Contact({ contactRef }) {
  return (
    <section ref={contactRef} id="contact" className="section">
      <div className="container">
        <div className="nk-block nk-block-about">
          <div
            className="row justify-content-center text-center"
          >
            <div className="nk-block-text">
              <div className="nk-block-text-head">
                {/* <h3 className="text-white">Contract Address</h3>
                    <a target="_blank" rel="noreferrer" href="https://blockscout.com/etc/mainnet/address/0x59E34EF31049565D041Aec6137F40f518c2D47c1/contracts"><strong>
                    0x59E34EF31049565D041Aec6137F40f518c2D47c1
                      </strong></a>
                    <a style={{cursor: 'pointer'}}><em className="contact-icon fas fa-copy" /></a> */}
              </div>
            </div>
            <div className="nk-block-text">
              <div className="nk-block-text-head">
                <h2 data-delay="0.7" className="title title-xl roadmap__gelato">
                  Contact Us
                </h2>
                <p data-delay="0.8">
                  If you have any questions or encounter any trouble , please do
                  not hesitate to contact us through our official social media
                  channels. Our team will be happy to help you as soon as
                  possible..
                </p>
                <h3 className="text-white">Contract Address</h3>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blockscout.com/etc/mainnet/address/0x59E34EF31049565D041Aec6137F40f518c2D47c1/contracts"
                >
                  <strong>0x59E34EF31049565D041Aec6137F40f518c2D47c1</strong>
                </a>
                <a style={{ cursor: "pointer" }}>
                  <em className="contact-icon fas fa-copy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
