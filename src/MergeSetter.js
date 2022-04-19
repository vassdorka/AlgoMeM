import {useState} from 'react';
import "./components/stylesheets/MergeSetter/MergeSetter.css";
import PropTypes from 'prop-types';

function MergeSetter ( { speedaction1, speedaction2, numberaction1, numberaction2 }) {
  const [settingBox, setSettingBox] = useState(false);

  const showSettingBox = () => setSettingBox(!settingBox) //jelenlegi ellenkezője
    return (
      <>
      <div className={settingBox ? 'mergeSetterbox inactive' : 'mergeSetterbox'}>
        <button id="mergeSetterBtn" onClick={showSettingBox}>
            <p>-</p>
            <p>-</p>
            <p>-</p>
        </button>
      </div>
      <div className={settingBox ? 'mergeSetter active' : 'mergeSetter'}>
        <div id="mergeSetterDiv">
            <div id="mergeSet1">
                <h3 id="mergeSpeedLabel">speed</h3>
                <div id="mergeBtns">
                    <button id="mergeButton1" onClick={speedaction1}>&lt;</button>
                    <button id="mergeButton2"  onClick={speedaction2}>&lt;</button>
                </div>
            </div>
            <div id="mergeSet2">
                <h3 id="mergeNumberLabel">number</h3>
                <div id="mergeBtns">
                    <button id="mergeButton1" onClick={numberaction1}>&lt;</button>
                    <button id="mergeButton2" onClick={numberaction2}>&lt;</button>
                </div>
            </div>
            <div className="mergeClose" onClick={showSettingBox}>X</div>
        </div>
      </div>
      </>
    )
}

MergeSetter.propTypes = {
  speedaction1: PropTypes.func,
  speedaction2: PropTypes.func,
  numberaction1: PropTypes.func,
  numberaction2: PropTypes.func,
}

export default MergeSetter