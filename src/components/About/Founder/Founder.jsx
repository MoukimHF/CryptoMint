import React from "react";

function Founder() {
  return (
    <section id="apes" className="section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2 title="Bored Ape Collection" className="title title-xl">
                The Founder
              </h2>
              <p className="animated">
                Our founder is Ali Essa, a young college student that is
                extremely passionate about Ethereum Classic, He is of Egyptian
                descent and currently resides in the United States he has always
                been interested in CryptoCurrency and NFTS and most importantly
                $ETC, he is currently working as an operations manager for
                multiple businesses and he is planning to pursue a degree in
                Software engineering due to his extreme interest in software
              </p>
            </div>
          </div>
        </div>
        <center>
        <img
          src="/images/founder.jpg"
          width="300"
          height="300"
          style={{width: "300px", height: "auto"}}
          className="figure-img mx-auto img-fluid rounded"
          alt="The founder."
        />
        
        <ul data-delay="0.6" className="
              social-links social-links-s2
              justify-content-center
            ">
                  <li>
                    <a target="_blank" style={{color:"#fff"}} rel="noreferrer" href="https://www.instagram.com/alii.essa/"><em className="fab fa-instagram" /></a>
                  </li>
                  <li>
                    <a target="_blank" style={{color:"#fff"}}  rel="noreferrer" href="https://twitter.com/ali22essa "><em className="fab fa-twitter" /></a>
                  </li>
                  <li>
                    <a target="_blank" style={{color:"#fff"}}  rel="noreferrer" href="https://www.linkedin.com/in/ali-m-essa-9b7165223"><em className="fab fa-linkedin" /></a>
                  </li>
                </ul>
        </center>
      </div>
    </section>
  );
}

export default Founder;
