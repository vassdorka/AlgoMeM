import './components/stylesheets/Navigation/Navigation.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import {useState} from 'react';

function Navigation ( { link1, link2, link3, link4, link5, link6, text1, text2, text3, text4, text5, text6 }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar) //jelenlegi ellenkezője
    return (
      <>
      <div className={sidebar ? 'navbar inactive' : 'navbar'}>
        <FaIcons.FaBars onClick={showSidebar} />
      </div>
      <nav className={sidebar ? 'nav active' : 'nav'}>
        <ul onClick={showSidebar}>
          <li>
            <Link to={link1} id="link" className='link1'>{text1}</Link>
          </li>
          <li>
            <Link to={link2} id="link" className='link2'>{text2}</Link>
          </li>
          <li>
            <Link to={link3} id="link" className='link3'>{text3}</Link>
          </li>
          <li>
            <Link to={link4} id="link" className='link4'>{text4}</Link>
          </li>
          <li>
            <Link to={link5} id="link" className='link4'>{text5}</Link>
          </li>
          <li>
            <Link to={link6} id="link" className='link4'>{text6}</Link>
          </li>
          <li className="close">
            <Link to='#' id="closeIcon"><AiIcons.AiOutlineClose /></Link>
          </li>
        </ul>
      </nav>
      </>
    )
}
Navigation.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  link6: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
}
export default Navigation
