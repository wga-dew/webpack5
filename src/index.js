import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { config } from './modules/config';
import AppService from './modules/app.service';
import './modules/ts.module';

import './style/main';
import './less/main';
import './scss/main';

console.log(config.key);
const service = new AppService('5000')
console.log(service.log());

render( < App / > , document.getElementById('app'));