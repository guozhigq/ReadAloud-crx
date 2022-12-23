import './popup.scss';

import React, { useState } from 'react';

import {
  Col,
  Row,
  Select,
  Slider,
  Switch,
} from 'antd';

const Popup = () => {
    const [rateValue, setRateValue] = useState(1);
    const [pitchValue, setPitchValue] = useState(1);
    // chrome.tabs.executeScript( {
    //   code: "window.getSelection().toString();"
    // }, function(selection) {
    //   console.log(selection)
    // });
    // 播放速度
    const onRateChange = (newValue) => {
      setRateValue(newValue);
    };
    // 音调
    const onPitchChange = (newValue) => {
      setPitchValue(newValue)
    }
    return (
        <div className="popup-container">
            <h3 className='popup-title'>大声朗读 - 文字转语音</h3>
            <ul>
                <li className="li-row">
                    <p className='li-label'>选择语言(language)</p>
                    <Select
                        defaultValue="lucy"
                        style={{
                            width: '100%',
                        }}
                        bordered={false}
                        options={[
                            {
                                value: "lucy",
                                label: "Lucy",
                            },
                        ]}
                    />
                </li>
                <li className="li-row">
                    <p className="li-label flex flex-bw">
                      <span>播放速度(rate)</span>
                      <span> x{rateValue}</span>
                    </p>
                    <Row>
                      <Col span={24}>
                        <Slider
                          min={0.5}
                          max={2}
                          step={0.25}
                          onChange={onRateChange}
                          value={typeof rateValue === 'number' ? rateValue : 0}
                        />
                      </Col>
                    </Row>
                </li>
                <li className="li-row">
                    <p className='li-label'>音调调整(pitch)</p>
                    <Row>
                      <Col span={24}>
                        <Slider
                          min={1}
                          max={20}
                          onChange={onPitchChange}
                          value={typeof pitchValue === 'number' ? pitchValue : 0}
                        />
                      </Col>
                    </Row>
                </li>
                <li>
                    <p className='li-label'>开启录音(record)</p>
                    <Switch checkedChildren="1" unCheckedChildren="0" />
                </li>
            </ul>
            <p className="version-text">Version 0.01</p>
        </div>
    );
};

export default Popup;
