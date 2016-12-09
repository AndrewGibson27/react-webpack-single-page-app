import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './app.scss';

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
    let class_name = '';
    
    if (!this.state.mounted) {
        class_name = styles.unmounted;
    } else {
        class_name = styles.mounted;
    }
  
    return (
      <div>
        <p className={class_name}>Hello world. My color change is controlled by CSS modules, and my media query size change is controlled by a Sass mixin.</p>
        <p>Above me is an image that is required in a React component.</p>
        <p className={styles.font_example}>My font is loaded by webfontloader.</p>
        <div className={styles.clearfix}>I am a floated div that uses a clearfix mixin.</div>
      </div>
    );
  }
}