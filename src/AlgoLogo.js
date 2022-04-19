import text from "./components/stylesheets/Graphics/home/Igazitott.gif";
import "./components/stylesheets/AlgoLogo/AlgoLogo.css"

const AlgoLogo = () => {
  return (
    <div className="algoLogo">
        <img id="algoTxt" src={text} alt=""></img>
    </div>
  )
}

export default AlgoLogo