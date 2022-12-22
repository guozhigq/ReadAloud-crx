import './index.scss';

import React from 'react';
import { render } from 'react-dom';

import Popup from './popup.jsx';

const root = document.querySelector('#popup-container')

render(<Popup />, root)

if (module.hot) module.hot.accept();