import React from 'react';
import { render } from 'react-dom';

import App from './containters/App';
import Demo from './containters/Demo';

import Message from '~/message';

import './style.less';

window.message = Message;

render(<App><Demo /></App>, document.getElementById('root'));
