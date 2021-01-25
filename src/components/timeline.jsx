import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Moddtech <span>2019-present</span></h2>
                        <p>I worked in an own company app (Lend Me It), it is an "uber-like" app for renting, buying and selling products or services. It has been launched in the US for bothe ios and Android.
                          I started working on the first app version with cordova, after a year in the company we started working on v2 with Flutter. I also worked with SQL and C# for the backend.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Quantumbit <span>2017-2019</span></h2>
                        <p>I worked with Ionic on a new company IP (Dr. Chapp). It was an "uber-like" app for medical services. The app is not available in the stores anymore.
                           I also worked in other proyects with laravel.  </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Nezter Landing Solutions <span>2016-2017</span></h2>
                        <p>I worked as a and App Developer. Mainly on "Natsberry" an app designed for creating cooking menus among other functionalities. I worked using cordova for hybrid applications, I managed the database through SQL and the backend with C#.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Optics Investigation Center ( CIO ) <span>Summer 2015</span></h2>
                        <p>I made an internship at CIO, in the city of León, Guanajuato. There I worked as a lab assistant technicican with the M.C. Enrique Noe Arias. 
                            There I helped working on the design of a lux meter device for a textile factory using Code Composer Studio and Labview. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Electronic Engineer in Universidad de Sonora <span>2012-2015</span></h2>
                        <p> Finished college with an spetial dedication in digital control, working with Microcontroller programming. I had an increasing interest for programming due to these kind of subjects. Studied coding
                          on my own while also going through college</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
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
