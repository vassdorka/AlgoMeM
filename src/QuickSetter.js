import {useState} from 'react';
import "./components/stylesheets/QuickSetter/QuickSetter.css";
import PropTypes from 'prop-types';

function QuickSetter ( { speedaction1, speedaction2, numberaction1, numberaction2 }) {
  const [settingBox, setSettingBox] = useState(false);

  const showSettingBox = () => setSettingBox(!settingBox) //jelenlegi ellenkezője
    return (
      <>
      <div className={settingBox ? 'quickSetterbox inactive' : 'quickSetterbox'}>
        <button id="quickSetterBtn" onClick={showSettingBox}>
            <p id="firstP">-</p>
            <p>-</p>
            <p>-</p>
        </button>
      </div>
      <div className={settingBox ? 'quickSetter active' : 'quickSetter'}>
        <div id="quickSetterDiv">
            <div id="quickSet1">
                <h3 id="quickSpeedLabel">speed</h3>
                <div id="quickBtns">
                    <button id="quickButton1" onClick={speedaction1}>&lt;</button>
                    <button id="quickButton2"  onClick={speedaction2}>&lt;</button>
                </div>
            </div>
            <div id="quickSet2">
                <h3 id="quickNumberLabel">number</h3>
                <div id="quickBtns">
                    <button id="quickButton1" onClick={numberaction1}>&lt;</button>
                    <button id="quickButton2" onClick={numberaction2}>&lt;</button>
                </div>
            </div>
            <div className="quickClose" onClick={showSettingBox}>X</div>
        </div>
      </div>
      </>
    )
}

QuickSetter.propTypes = {
  speedaction1: PropTypes.func,
  speedaction2: PropTypes.func,
  numberaction1: PropTypes.func,
  numberaction2: PropTypes.func,
}

export default QuickSetter