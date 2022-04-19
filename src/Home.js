import NavigationHome from './NavigationHome';
import AlgoLogo from './AlgoLogo';
import HomeMid from './HomeMid';
import HomeBottom from './HomeBottom';
import CursorHome from './CursorHome';
import './components/stylesheets/Home/Home.css';

function Home() {
  return (
    <div className="home">
     <NavigationHome />
     <AlgoLogo />
     <div id="homeLine1"></div>
     <HomeMid />
     <div id="homeLine2"></div>
     <HomeBottom />
     <CursorHome />
    </div>
  );
}

export default Home;
