import React from 'react';
import { render } from 'react-dom';

import App from './components/app/App';
import getFontsAsync from './fonts';

import 'normalize.css/normalize.css';

render(<App />, document.getElementById('root'));
getFontsAsync();
