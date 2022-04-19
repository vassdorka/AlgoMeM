import {useState} from 'react';
import PropTypes from 'prop-types';
import "./components/stylesheets/BubbleSetter/BubbleSetter.css";

function BubbleSetter ( { speedaction1, speedaction2, numberaction1, numberaction2 }) {
  const [settingBox, setSettingBox] = useState(false);

  const showSettingBox = () => setSettingBox(!settingBox) //jelenlegi ellenkezője
    return (
      <>
      <div className={settingBox ? 'bubSetterbox inactive' : 'bubSetterbox'}>
        <button id="setterBtn" onClick={showSettingBox}>
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
        </button>
      </div>
      <div className={settingBox ? 'bubSetter active' : 'bubSetter'}>
        <div id="bubSetterDiv">
            <div id="bubSet1">
                <h3 id="bubSpeedLabel">speed</h3>
                <div id="BubBtns">
                    <button id="bubButton1" onClick={speedaction1}><h3 id="up">&lt;</h3></button>
                    <button id="bubButton2"  onClick={speedaction2}><h3 id="down">&lt;</h3></button>
                </div>
            </div>
            <div id="bubSet2">
                <h3 id="bubNumberLabel">number</h3>
                <div id="BubBtns">
                    <button id="bubButton1" onClick={numberaction1}><h3 id="up">&lt;</h3></button>
                    <button id="bubButton2" onClick={numberaction2}><h3 id="down">&lt;</h3></button>
                </div>
            </div>
        </div>
        <div className="bubClose" onClick={showSettingBox}>X</div>
      </div>
      </>
    )
}

BubbleSetter.propTypes = {
  speedaction1: PropTypes.func,
  speedaction2: PropTypes.func,
  numberaction1: PropTypes.func,
  numberaction2: PropTypes.func,
}

export default BubbleSetter