import React, { Component } from 'react';
import { Text  } from '../containers/Language';

export default class About extends Component {
  render() {
    return (
        
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12"> 
                    <div className="about-desc">
                    <span className="heading-meta"><Text tid="aboutMeTitle" /></span>
                    <h2 className="colorlib-heading"><Text tid="aboutMeWhoAmI" /></h2>
                    <p><Text tid="aboutMePhra1" /></p>
                    <p><Text tid="aboutMePhra2" /></p>
                    <p><Text tid="aboutMePhra3" /> </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"><Text tid="aboutMeWhat" /></span>
                <h2 className="colorlib-heading"><Text tid="aboutMeExpert" /></h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-3 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3><Text tid="aboutMeWebDevTitle" /> </h3>
                    <p><Text tid="aboutMeExpertise" /></p>
                </div>
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3><Text tid="aboutMeWebDataStructuresTitle" /></h3>
                    <p><Text tid="aboutMeWebDataStructuresTitleP" /></p>
                </div>
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3><Text tid="aboutMeAppDevTitle" /></h3>
                    <p><Text tid="aboutMeAppDevTitleP" /></p>
                </div>
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3><Text tid="aboutMeAppLangTitle" /></h3>
                    <div className="row">

                        <div className="col-xs-6 text-left">
                            <p><Text tid="aboutMeSpanish" /></p>
                            <p><Text tid="aboutMeGerman" /></p>

                        </div>
                        <div className="col-xs-6 text-left">
                            <p><Text tid="aboutMeEnglish" /></p>
                            <p><Text tid="aboutMeFrench" /></p>

                        </div>
                    </div>
       
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
