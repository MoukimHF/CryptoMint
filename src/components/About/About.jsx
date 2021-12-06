import React from "react";
import Slider from "./Slider";
import Roadmap from "./Roadmap";
import Faqs from "./Faqs";
import Contact from "./Contact";
import Ecosystem from "./Ecosystem";
function About({roadmapRef,faqsRef,contactRef}) {
  return (
    <main className="nk-pages tc-light">
      <section id="about" className="section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2 title="What and Why" className="title title-xl roadmap__gelato">
                  ABOUT
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-xxl">
          <div className="nk-block">
            <div
              className="
          row
          justify-content-between
          align-items-center
          gutter-vr-40px
        "
            >
              <div className="col-lg-6 order-lg-last">
                <div className="gfx py-4">
                  <img src="/images/azalea/thezoo.jpeg" alt="gfx" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="nk-block-text">
                  <h2 className="title">What are Classic Pharaohs??</h2>
                  <div className="cpn-text">
                    <p className="lead-s2">
                      The Classic Pharaohs are a collection of 5,000 Pharaohs
                      that are each unique and different from each other, it is
                      the first unique project on the Ethereum Classic
                      Blockchain that is not found anywhere else!!
                    </p>
                    
                  </div>
                  <ul className="btn-grp gutter-vr-20px pdt-m">
                    <li data-delay="0.7">
                      <a
                        href="#ecosystems"
                        className="menu-link btn btn-underline"
                      >
                        See the Ecosystems
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="apes" className="section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2 title="Bored Ape Collection" className="title title-xl">
                  Etc Apes
                </h2>
                <p className="animated">
                  The Bored Ape Yacht Club (BAYC) is an Ethereum-Classic-based
                  NFT collection of 10,000 unique Bored Apes. Each Bored Ape has
                  a basket of traits programmatically generated from over 170
                  traits, including expression, clothing, headware, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Slider />
      </section>
      <Ecosystem />
      <Roadmap roadmapRef={roadmapRef} />
      <Faqs faqsRef={faqsRef} />
      <Contact contactRef={contactRef} />
    </main>
  );
}

export default About;
