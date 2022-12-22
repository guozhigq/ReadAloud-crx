import './index.sass';

import React from 'react';

import { createRoot } from 'react-dom/client';

import Popup from './popup.jsx';

const root = document.querySelector('#popup-container')

createRoot(root).render(<Popup />)