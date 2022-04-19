import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const HomeBottomBoxes = ( { link, id, text } ) => {
  return (

      <div id={ id }>
        <Link to={ link } id="link">
          <h1 id="text1"> { text } </h1>
          <h1 id="text2"> Sort </h1>
        </Link>
      </div>
  )
}

HomeBottomBoxes.propTypes = {
    link: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
}

export default HomeBottomBoxes