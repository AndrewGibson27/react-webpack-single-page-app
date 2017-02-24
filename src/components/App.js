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
    const self = this;

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
        <p className={class_name}>Hello world. My color change is controlled by React, and my font size change is controlled by sass-mq.</p>
        <img className='image' src='img/placeholder.png' />
        <p className='image-caption'>Above me is an image that is rendered server side, then client side, along with the rest of the content.</p>
        <p className='font_example'>My font is loaded by WebFontLoader.</p>
        <div className='float'>
          <div className='float__item'>Demonstrates Sass clearfix extension, just for fun.</div>
          <div className='float__item'></div>
        </div>
        <div className='twitter'></div>
        <p className='twitter-caption'>Above me is a sprite image handled by PostCSS</p>
        <div className='bg-image'></div>
        <p className='bg-image-caption'></p>
      </div>
    );
  }
}
