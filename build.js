import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './src/components/app/App';
import pug from 'pug';

const content = ReactDOMServer.renderToString(<App/>);
const compiler = pug.compileFile('./views/index.pug');

const markup = compiler({
  content: content
});

console.log(markup);