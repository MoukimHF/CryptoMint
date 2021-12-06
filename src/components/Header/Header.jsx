import React from 'react'
import Connect from './Connect'

function Header({roadmapScroll, faqsScroll, contactScroll}) {
    return (
        <header id="header" className="nk-header page-header is-transparent is-sticky is-dark">
        <div className="header-main">
          <div className="header-container container container-xxl">
            <div className="header-wrap">
              <div className="header-logo logo">
                <a href="./" className="logo-link"><img src="/images/logo-s2-white.png" srcSet="/images/logo-s2-white2x.png 2x" alt="logo" className="logo-dark" />
                  <img src="/images/logo-s2-white.png" srcSet="/images/logo-s2-white2x.png 2x" alt="logo" className="logo-light" /></a>
              </div>
              <div className="header-nav-toggle">
                <a href="#" data-menu-toggle="header-menu" className="navbar-toggle"><div className="toggle-line"><span /></div></a>
              </div>
              <div className="header-navbar">
                <nav id="header-menu" className="header-menu">
                  <ul className="menu">
                    <li className="menu-item">
                   
                      <a href="/" aria-current="page" className="
                      page-scroll
                      nuxt-link-exact-active nuxt-link-active
                    ">Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="/" className="menu-link nav-link page-scroll">All Bored Apes</a>
                    </li>
                    <li className="menu-item">
                      <a type="button" onClick={roadmapScroll} className="menu-link nav-link page-scroll">Roadmap</a>
                    </li>
                    <li className="menu-item">
                      <a type="button" onClick={faqsScroll} className="menu-link nav-link page-scroll">FAQs ?</a>
                    </li>
                    <li className="menu-item">
                      <a type="button" onClick={contactScroll} className="menu-link nav-link page-scroll">Contact</a>
                    </li>
                  </ul>
                  <ul className="menu-btns">
                    <li>
                      <a href="/mint" className="text-white mr-5" /><a className="
                      btn btn-md btn-round btn-thin btn-primary btn-auto
                      no-change
                    ">
                        Mint
                      </a>
                    </li>
                    <li>
                      <Connect />
                    </li>
                  </ul>
                </nav>
                <div className="header-navbar-overlay" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
