import {useState} from 'react';
import "./components/stylesheets/InsertionSetter/InsertionSetter.css";
import speedLabel from "./components/stylesheets/Graphics/insertionSort/speedNeonText.png";
import numberLabel from "./components/stylesheets/Graphics/insertionSort/numberNeonText.png";
import PropTypes from 'prop-types';

function InsertionSetter ( { speedaction1, speedaction2, numberaction1, numberaction2 }) {
  const [settingBox, setSettingBox] = useState(false);

  const showSettingBox = () => setSettingBox(!settingBox) //jelenlegi ellenkezője
    return (
      <>
      <div className={settingBox ? 'setterbox inactive' : 'setterbox'}>
        <button id="setterBtn" onClick={showSettingBox}></button>
      </div>
      <div className={settingBox ? 'setter active' : 'setter'}>
        <div id="setterDiv">
            <div id="set1">
                <img src={speedLabel} id="speedLabel" alt=""></img>
                <div id="Btns">
                    <button id="button1" onClick={speedaction1}></button>
                    <button id="button2"  onClick={speedaction2}></button>
                </div>
            </div>
            <div id="set2">
                <img src={numberLabel} id="numberLabel" alt=""></img>
                <div id="Btns">
                    <button id="button1" onClick={numberaction1}></button>
                    <button id="button2" onClick={numberaction2}></button>
                </div>
            </div>
            <div className="close" onClick={showSettingBox}>
            </div>
        </div>
      </div>
      </>
    )
}

InsertionSetter.propTypes = {
  speedaction1: PropTypes.func,
  speedaction2: PropTypes.func,
  numberaction1: PropTypes.func,
  numberaction2: PropTypes.func,
}

export default InsertionSetter