import React from 'react'

function Footer() {
    return (
        <footer className="nk-footer-bar section section-s tc-light">
        <div className="container container-xxl">
          <div className="row gutter-vr-10px">
            <div className="col-lg-6 order-lg-last text-lg-right">
              <ul className="footer-nav">
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
                <li>
                  <a target="_blank" rel="noreferrer" href="https://blockscout.com/etc/mainnet/address/0x59E34EF31049565D041Aec6137F40f518c2D47c1/contracts">Contract</a>
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
