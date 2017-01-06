import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mounted: false
    };
  }
  
  componentDidMount() {
    let self = this;
    
    setInterval(function(){
      self.setState({
        mounted: true
      });
    }, 2000);
  }

  render() {
    let class_name;
    
    if (!this.state.mounted) {
      class_name = 'paragraph--unmounted';
    } else {
      class_name = 'paragraph--mounted';
    }
  
    return (
      <div>
        <p className={class_name}>Hello world. My color change is controlled by CSS modules, and my media query size change is controlled by a Sass mixin.</p>
        <img className='image' src='img/placeholder.png' />
        <p className='image-caption'>Above me is an image that is required in a React component.</p>
        <p className='font_example'>My font is loaded by webfontloader.</p>
        <div className='float'>
          <div className='float__item'>Demonstrates @clearfix mixin</div>
          <div className='float__item'></div>
        </div>
        <div className='twitter'></div>
        <p className='twitter-caption'>Above me is a sprite image handled by PostCSS</p>
      </div>
    );
  }
}