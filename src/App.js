// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Translate from './components/translate'
import About from './components/about'
import Timeline from './components/timeline'
import { LanguageProvider } from './containers/Language';

import LanguageSelector from './components/LanguageSelector';

class App extends Component {
  render() {
    return (
      <LanguageProvider>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>
            {/* <LanguageSelector /> */}
          <div id="colorlib-main">
            {/* <Translate></Translate> */}
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
              </div>
          </div>
        </div>
      </LanguageProvider>
    );
  }
}

export default App;
