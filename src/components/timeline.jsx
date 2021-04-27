import React, { Component } from 'react';
import { Text  } from '../containers/Language';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"><Text tid="timelineHighlights" /></span>
                <h2 className="colorlib-heading animate-box"><Text tid="timelineTitle" /></h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-device-laptop" />
                      </div>
                      <div className="timeline-label">
                        <h2><Text tid="moddTech" /> <span><Text tid="moddTechYears" /></span></h2>
                        <p><Text tid="moddtechDid" /></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-device-phone" />
                      </div>
                      <div className="timeline-label">
                        <h2><Text tid="qbit" /> <span><Text tid="qbitYears" /></span></h2>
                        <p><Text tid="qbithDid" /></p>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-device-tablet" />
                      </div>
                      <div className="timeline-label">
                        <h2><Text tid="nezter" /> <span><Text tid="nezterYears" /></span></h2>
                        <p><Text tid="nezterDid" /></p>  </div> 
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><Text tid="cio" /> <span><Text tid="cioYears" /></span></h2>
                        <p><Text tid="cioDid" /></p>  </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeIBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><Text tid="uni" /> <span><Text tid="uniYears" /></span></h2>
                        <p><Text tid="uniDid" /></p>  </div> 
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
