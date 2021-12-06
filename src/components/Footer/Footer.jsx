import React from 'react'

function Footer() {
    return (
        <footer className="nk-footer-bar section section-s tc-light">
        <div className="container container-xxl">
          <div className="row gutter-vr-10px">
            <div className="col-lg-6 order-lg-last text-lg-right">
              <ul className="footer-nav">
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
            <div className="col-lg-6">
              <div className="copyright-text copyright-text-s2">
                Copyright © 2021. Powered by
                <a href="https://ethereumclassic.org/">EthereumClassic</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
