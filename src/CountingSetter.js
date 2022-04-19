import {useState} from 'react';
import PropTypes from 'prop-types';
import "./components/stylesheets/CountingSetter/CountingSetter.css";

function CountingSetter ( { speedaction1, speedaction2, numberaction1, numberaction2 }) {
  const [settingBox, setSettingBox] = useState(false);

  const showSettingBox = () => setSettingBox(!settingBox) //jelenlegi ellenkezője
    return (
      <>
      <div className={settingBox ? 'countSetterbox inactive' : 'countSetterbox'}>
        <button id="countSetterBtn" onClick={showSettingBox}>
            <h1 id="setterBtnText">|||</h1>
        </button>
      </div>
      <div className={settingBox ? 'countSetter active' : 'countSetter'}>
        <div id="countSetterDiv">
            <div id="countSet1">
                <h3 id="countSpeedLabel">speed</h3>
                <div id="countBtns">
                    <button id="countButton1" onClick={speedaction1}><h3 id="cup">&lt;</h3></button>
                    <button id="countButton2"  onClick={speedaction2}><h3 id="cdown">&lt;</h3></button>
                </div>
            </div>
            <div id="countSet2">
                <h3 id="countNumberLabel">number</h3>
                <div id="countBtns">
                    <button id="countButton1" onClick={numberaction1}><h3 id="cup">&lt;</h3></button>
                    <button id="countButton2" onClick={numberaction2}><h3 id="cdown">&lt;</h3></button>
                </div>
            </div>
        </div>
        <div className="countClose" onClick={showSettingBox}>X</div>
      </div>
      </>
    )
}

CountingSetter.propTypes = {
  speedaction1: PropTypes.func,
  speedaction2: PropTypes.func,
  numberaction1: PropTypes.func,
  numberaction2: PropTypes.func,
}

export default CountingSetter