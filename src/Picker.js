import PropTypes from 'prop-types'
import "./components/stylesheets/Picker/Picker.css"

function Picker  ( { action1, action2 })  {
  return (
      <div id="picker">
        <button id="quickAnimationtBtn" onClick={ action1 }>presenter</button>
        <button id="explonationBtn" onClick={ action2 }>explonation</button>
      </div>
  )
}

Picker.propTypes = {
    action1: PropTypes.func,
    action2: PropTypes.func,
}

export default Picker