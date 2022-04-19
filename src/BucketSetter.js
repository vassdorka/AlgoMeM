import {useState} from 'react';
import "./components/stylesheets/BucketSetter/BucketSetter.css";
import PropTypes from 'prop-types';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";

function BucketSetter ( { speedaction1, speedaction2, numberaction1, numberaction2 }) {
  const [settingBox, setSettingBox] = useState(false);

  const showSettingBox = () => setSettingBox(!settingBox) //jelenlegi ellenkezője
    return (
      <>
      <div className={settingBox ? 'bucketSetterbox inactive' : 'bucketSetterbox'}>
        <FaIcons.FaBars id="bucketSetterBtn" onClick={showSettingBox} />
      </div>
      <div className={settingBox ? 'bucketSetter active' : 'bucketSetter'}>
        <div id="bucketSetterDiv">
            <div id="bucketSet1">
                <h3 id="bucketSpeedLabel">speed</h3>
                <div id="bucketBtns">
                    <button id="bucketButton1" onClick={speedaction1}>&lt;</button>
                    <button id="bucketButton2"  onClick={speedaction2}>&lt;</button>
                </div>
            </div>
            <div id="bucketSet2">
                <h3 id="bucketNumberLabel">number</h3>
                <div id="bucketBtns">
                    <button id="bucketButton1" onClick={numberaction1}>&lt;</button>
                    <button id="bucketButton2" onClick={numberaction2}>&lt;</button>
                </div>
            </div>
        </div>
        <div className="bucketClose" onClick={showSettingBox}>
            <Link to='#'><AiIcons.AiOutlineClose /></Link>
        </div>
      </div>
      </>
    )
}

BucketSetter.propTypes = {
  speedaction1: PropTypes.func,
  speedaction2: PropTypes.func,
  numberaction1: PropTypes.func,
  numberaction2: PropTypes.func,
}

export default BucketSetter