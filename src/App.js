// import React, { Component } from 'react';
import React, { Component } from 'react';
// import {TweenMax} from "gsap";
// import Draggable from "gsap/Draggable";

import PhotoProfile from './PhotoProfile';
import Logo from './Logo';
import Greetings from './Greetings';

import './css/Global.css';
import './css/Flexbox.css';
import './css/Content.css';
import './css/Responsive.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      says:"Evening"
    };
  }


  render() {
    return (
      <div className="bg-bottom-767 bg-color bg-full">
        <div className="container set-gap">
          <Logo src="img/eka-logo.png" title="Eka Aditia C" alt="eka: Logo eka"/>
          <div className="f f-r f-c-767 f-ctr mdl calc-height">
            <PhotoProfile src="img/eka-aditia-c.jpg" title="Eka Aditia C"/>
            <div className="box-content">
              <h1> Eka Aditia C </h1>
              <span>c is cristiyanto </span>
              <p>

                <span>
                 Good {this.state.says}
                </span>
                , Have Nice Day! <br/>
                I'm a UI/UX and developer at
                <a href="www.java-valley.com" title="Java Valley: My awesome office"> Java Valley </a>.
                where I build awesome software that helps people make happy. <br/>

              </p>
            </div>
          </div>
          <p className="footer-p">
            eka. is a web designer, full-service digital agency, building beautiful digital products, <br/> brands, and experiences.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
