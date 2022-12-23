import './index.scss';

import React from 'react';
import { render } from 'react-dom';

import { ConfigProvider } from 'antd';

import Popup from './popup.jsx';

const App = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#444",
                },
            }}
        >
            <Popup />
        </ConfigProvider>
    );
};
const root = document.querySelector("#popup-container");

render(<App />, root);

if (module.hot) module.hot.accept();
