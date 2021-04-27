import React, { Component } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import LanguageSelectorText from '../components/LanguageSelectorText';
import { Text  } from '../containers/Language';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar"  aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Jorge Gámez López</a></h1>
              <span className="email"><i className="icon-mail"></i> jgamezj@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home"><Text tid="introductionLabel" /></a></li>
                  <li><a href="#about" data-nav-section="about"><Text tid="aboutLabel" /></a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline"><Text tid="timelineLabel" /></a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/jorge.gamez.589/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                {/* <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                <li><a href="https://www.instagram.com/j.gamezl/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/jgamezl/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/jgamesl" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                {/* <li>
                  <a href="https://github.com/jgamesl" target="_blank" rel="noopener noreferrer">EN  </a>
                  <a href="https://github.com/jgamesl" target="_blank" rel="noopener noreferrer">ES  </a>
                  <a href="https://github.com/jgamesl" target="_blank" rel="noopener noreferrer">DE</a>
                </li> */}
                <li><LanguageSelectorText/></li>

                {/* <li><LanguageSelector /></li> */}
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
              
            
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
