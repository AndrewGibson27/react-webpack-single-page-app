import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import getFontsAsync from './fonts';

import 'normalize.css/normalize.css';
import './scss/app.scss';

render(<App />, document.getElementById('root'));
getFontsAsync();
