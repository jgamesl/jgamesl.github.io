import React, { Component, useState, useContext } from 'react'


// import LanguageSelector from './components/LanguageSelector';

import { LanguageProvider, Text, LanguageContext  } from '../containers/Language';
export default function Translate()  {
  
 
    const selectOptions = ['en', 'option2', 'option3'];

    const [clickText, setClickText] = useState();
    const [selectedOption, setSelectedOption] = useState();
    const { dictionary } = useContext(LanguageContext);

    const handleClick = () => {
      setClickText(<Text tid="buttonClicked" />);
      console.log(selectedOption);
      console.log(selectOptions);
    }

    const handleOptionChange = e => {
      setSelectedOption(e.target.value);
      console.log(e.target.valu);
    }

    return (
      <div>
      <h1><Text tid="exploreHeader" /></h1>
      <p><Text tid="welcomeDescription" /></p>

      <div>
        <input type="text" placeholder={dictionary.enterText} />
        <button onClick={handleClick}>
          <Text tid="clickMe" />
        </button>
        <p>{clickText}</p>
      </div>

      <div>
        <select
          onChange={handleOptionChange}
          value={selectedOption}
        >
            <option key={1} value={selectOptions}>
              jaja
            </option>
            <option key={2} value={selectOptions}>
              jajajd
            </option>
          {selectOptions.map(selectOptions => (
            <option key={selectOptions} value={selectOptions}>
              {dictionary[selectOptions]}
            </option>
          ))}
        </select>
      </div>

      <a href="https://halilcanozcelik.com" target="_blank" rel="noopener noreferrer">
        <Text tid="aboutMe" />
      </a>
    </div>
      // <div>
      //   <section id="colorlib-hero" className="js-fullheight" data-section="home">
      //     <div className="flexslider js-fullheight">
      //       <ul className="slides">
      //         {/* <li style={{'backgroundImage': `url(https://s0.2mdn.net/10321501/04092021-104442133-Trident_display_HC_300x250.png)`}}> */}
      //         <li style={{backgroundImage: `url('images/img_bg.jpg')`}}>
      //           <div className="overlay" />
      //           <div className="container-fluid">
      //             <div className="row">
      //               <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
      //                 <div className="slider-text-inner js-fullheight">
      //                   <div className="desc fomew">
      //                     <h1 style={{color: "white"}}>Hi! <br />I'm Jorge</h1>
      //                     <p ><a style={{color: "white",borderColor: "white"}} className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1er6uSsW79fn8L3iQFLl_j24sF9tPXG6_/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </li>
      //         {/* <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
      //           <div className="overlay" />
      //           <div className="container-fluid">
      //             <div className="row">
      //               <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
      //                 <div className="slider-text-inner">
      //                   <div className="desc">
      //                     <h1>I love building<br /> THINGS !!</h1>
      //                     <p><a className="btn btn-primary btn-learn" href="https://github.com/jgamesl" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </li>
      //         <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
      //           <div className="overlay" />
      //           <div className="container-fluid">
      //             <div className="row">
      //               <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
      //                 <div className="slider-text-inner">
      //                   <div className="desc">
      //                     <h1>I often <br/>Write ... </h1>
      //                     <p><a className="btn btn-primary btn-learn" href="https://dhruvbarochiya.me/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </li> */}
      //       </ul>
      //     </div>
      //   </section>
      // </div>
    )
  
}