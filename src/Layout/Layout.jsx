import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children,roadmapScroll,faqsScroll,contactScroll }) {
  return (
    <div>
      <div className="nk-body body-wider bg-theme mode-onepage">
        <div className="nk-wrap">
          <Header roadmapScroll={roadmapScroll} faqsScroll={faqsScroll} contactScroll={contactScroll} />
          {children}
          <Footer />
          <button data-target="html" className="scroll-top scroll-to-target">
            <span className="ti-angle-up" />
          </button>
        </div>
        <div
          className="preloader preloader-alt no-split"
          style={{ display: "none" }}
        >
          <span className="spinner spinner-alt load-done">
            <img
              src="images/logo-s2-white.png"
              alt=""
              className="spinner-brand"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Layout;
