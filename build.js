import ReactDOMServer from 'react-dom/server';
import React from 'react';
import App from './src/components/app/App';
import pug from 'pug';
import fs from 'fs';
import path from 'path';

const content = ReactDOMServer.renderToString(<App/>);
const compiler = pug.compileFile('./views/index.pug');

const markup = compiler({
  content: content
});

fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), markup);