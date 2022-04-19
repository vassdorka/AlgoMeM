import "./components/stylesheets/HomeMid/HomeMid.css";
import b1 from "./components/stylesheets/Graphics/home/bw/bar1.png";
import b2 from "./components/stylesheets/Graphics/home/bw/bar2.png";
import b3 from "./components/stylesheets/Graphics/home/bw/bar3.png";
import b4 from "./components/stylesheets/Graphics/home/bw/bar4.png";
import b5 from "./components/stylesheets/Graphics/home/bw/bar5.png";
import b6 from "./components/stylesheets/Graphics/home/bw/bar6.png";
import b7 from "./components/stylesheets/Graphics/home/bw/bar7.png";
import b8 from "./components/stylesheets/Graphics/home/bw/bar8.png";
import b9 from "./components/stylesheets/Graphics/home/bw/bar9.png";
import sortGif from "./components/stylesheets/Graphics/home/graphGif.gif";


const HomeMid = () => {
    return (

      <>
        <div className='secondPage' id="secondPage">

              <div id="container">
               
               <div id="firstRow">
                <h1 id="question" >what is</h1>
               </div>

                <div id="secondRow">
                  <div id="codes">
                    <h2 id="hiddenAlgo">AlgoMeM</h2>

                    <div className='barCodes1' id="barCodes1">
                      <img src={b1} alt="" />
                      <img src={b2} alt="" />
                      <img src={b3} alt="" />
                      <img src={b4} alt="" />
                      <img src={b5} alt="" />
                      <img src={b6} alt="" />
                      <img src={b7} alt="" />
                      <img src={b8} alt="" />
                      <img src={b9} alt="" />
                    </div>
                  </div>
                  <h1 id="for">for?</h1>
                </div>

                <div className='content' id="content">
                  <p>
                  AlgoMeM is a new web interface that guides you through the maze of sorting algorithms!
                  </p>

                  <h2>
                  Is it difficult to understand? <br />
                  Cant imagine how they work exactly?<br />
                  Are you confused about different algorithms?<br />
                  Simply just can't put the picture together?
                  </h2>

                  <p>
                  AlgoMeM will help You with these! Helps You to understand, visualize and differentiate
                  the different worlds of sorting algorithms, and to make memorization faster.
                  </p>

                  <h1>------come on' start studying them and have fun------</h1>
                </div>

              </div>

              <div id="sortAnim">
                  <img src={ sortGif } alt=""></img>
              </div>
        </div>

        <div id="halfLine"></div>

    </>
    )
}


export default HomeMid
