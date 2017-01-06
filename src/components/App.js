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
      class_name = 'unmounted';
    } else {
      class_name = 'mounted';
    }
  
    return (
      <div>
        <p className={class_name}>Hello world. My color change is controlled by CSS modules, and my media query size change is controlled by a Sass mixin.</p>
        <img src='img/placeholder.png' />
        <p>Above me is an image that is required in a React component.</p>
        <p className='font_example'>My font is loaded by webfontloader.</p>
        <div className='clearfix'>I am a floated div that uses a clearfix mixin.</div>
      </div>
    );
  }
}