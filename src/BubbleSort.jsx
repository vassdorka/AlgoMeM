import Navigation from "./Navigation";
import bubble from "./components/stylesheets/Graphics/bubbleSort/bubbleSimple.png";
import bubbleCompare from "./components/stylesheets/Graphics/bubbleSort/BubbleCompare.png";
import './components/stylesheets/BubbleSort/BubbleSort.css'
import { Component } from "react/cjs/react.production.min";
import BubbleSetter from "./BubbleSetter";
import Cursor from './Cursor';
import Picker from "./Picker";

var elementNum = 6;
var speed = 2000;

export default class BubbleSort extends Component{
    constructor() {
        super();
        this.createArray = this.createArray.bind(this);
        this.doSort = this.doSort.bind(this);
        this.createAgain = this.createAgain.bind(this);
        this.stepBack = this.stepBack.bind(this);
        this.elementPlus = this.elementPlus.bind(this);
        this.elementMinus = this.elementMinus.bind(this);
        this.speedPlus = this.speedPlus.bind(this);
        this.speedMinus = this.speedMinus.bind(this);
        this.showExplonation = this.showExplonation.bind(this);
        this.doExplain = this.doExplain.bind(this);
        

        this.state = {
            array: [],
        };
    }

    showExplonation() {
        const array = [190, 150, 220, 90, 140, 160];
        this.setState({array});
        settingExplonationDivs();
    }

    async doExplain() {
        var backButton = document.getElementById("backBtn");
        backButton.style.display = "none";

        var expButtonDiv = document.getElementById("expButtonDiv");
        expButtonDiv.style.display = "none";

        const bubs =  document.getElementsByClassName('bubble');
        var compare = document.getElementById("compare");
        var expSwap = document.getElementById("swap");
        var notSwap = document.getElementById("notSwap");
        var finish = document.getElementById("finish");
        var done = document.getElementById("done");

        //1st compare
        textAppear(compare);
        imageChange(bubs, 0, 1, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[0], bubs[1]);
        await wait(speed);
        imageChange(bubs, 0, 1, bubble);
        textDisappear(expSwap);
        await wait(speed);

        //2nd compare
        textAppear(compare);
        imageChange(bubs, 1, 2, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(notSwap);
        await wait(speed);
        imageChange(bubs, 1, 2, bubble);
        textDisappear(notSwap);
        await wait(speed);

        //3rd compare
        textAppear(compare);
        imageChange(bubs, 2, 3, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[2], bubs[3]);
        await wait(speed);
        imageChange(bubs, 2, 3, bubble);
        textDisappear(expSwap);
        await wait(speed);

        //4th compare
        textAppear(compare);
        imageChange(bubs, 3, 4, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[3], bubs[4]);
        await wait(speed);
        imageChange(bubs, 3, 4, bubble);
        textDisappear(expSwap);
        await wait(speed);

        //5th compare
        textAppear(compare);
        imageChange(bubs, 4, 5, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[4], bubs[5]);
        await wait(speed);
        bubs[4].style.backgroundImage = `url(${bubble})`;
        bubs[4].style.transition = "1s";
        textDisappear(expSwap);
        await wait(speed);
        textAppear(finish);
        await wait(speed);
        textDisappear(finish);

        //6th compare
        textAppear(compare);
        imageChange(bubs, 0, 1, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(notSwap);
        await wait(speed);
        imageChange(bubs, 0, 1, bubble);
        textDisappear(notSwap);
        await wait(speed);

        //7th compare
        textAppear(compare);
        imageChange(bubs, 1, 2, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[1], bubs[2]);
        await wait(speed);
        imageChange(bubs, 1, 2, bubble);
        textDisappear(expSwap);
        await wait(speed);

        //8th compare
        textAppear(compare);
        imageChange(bubs, 2, 3, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[2], bubs[3]);
        await wait(speed);
        imageChange(bubs, 2, 3, bubble);
        textDisappear(expSwap);
        await wait(speed);

        //9th compare
        textAppear(compare);
        imageChange(bubs, 3, 4, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[3], bubs[4]);
        await wait(speed);
        textDisappear(expSwap);
        await wait(speed);
        textAppear(finish);
        await wait(speed);
        textDisappear(finish);

        //10th compare
        textAppear(compare);
        imageChange(bubs, 0, 1, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[0], bubs[1]);
        await wait(speed);
        imageChange(bubs, 0, 1, bubble);
        textDisappear(expSwap);
        await wait(speed);

        //11th compare
        textAppear(compare);
        imageChange(bubs, 1, 2, bubbleCompare);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(expSwap);
        await wait(speed);
        swap(bubs[1], bubs[2]);
        await wait(speed);
        bubs[0].style.backgroundImage = `url(${bubbleCompare})`;
        bubs[0].style.transition = "1s";
        textDisappear(expSwap);
        await wait(speed);
        textDisappear(compare);
        await wait(speed);
        textAppear(done);
        await wait(speed);
        for(let i = 0; i < bubs.length; i++) {
            bubs[i].style.backgroundImage = `url(${bubble})`;
            bubs[i].style.transition = "1s";
        }
        backButton.style.display = "flex";
    }

    elementPlus() {
        if(elementNum >= 11) {
            elementNum = 11;
        } else {
            elementNum++;
            this.createArray();
        }
    }

    elementMinus() {
        if(elementNum <= 3) {
            elementNum = 3;
        } else {
            elementNum--;
            this.createArray();
        }
    }

    speedPlus() {
        if(speed >= 4000) {
            speed = 4000;
        } else {
            speed += 200;
        }
    }

    speedMinus() {
        if(speed <= 200) {
            speed = 200;
        } else {
            speed += (-200);
        }
    }

    createArray() {
        const array = [];
        for (let i = 0; i < elementNum; i++) {
          array.push(randomNumbers(30, 200));
        }
        this.setState({array});
        settingDivs();
    }

    createAgain() {
        const array = [];
        for (let i = 0; i < elementNum; i++) {
            array.push(randomNumbers(30, 200));
            const bubs =  document.getElementsByClassName('bubble');
            bubs[i].style.backgroundImage = `url(${bubble})`;
            bubs[i].style.transform = "translate(0,0)";
            bubs[i].style.opacity = "1";
            bubs[i].style.transition = "1s";
        }
        this.setState({array});
        var startButton = document.getElementById("startBtn");
        startButton.style.display = "block";

        const donediv = document.getElementById("donediv");
        donediv.style.display = "none";

        var bubSetter= document.querySelector(".bubSetter");
        bubSetter.style.width = "26%";

        var bubNumber = document.getElementById("bubSet2");
        bubNumber.style.display = "flex";

        var bubSpeed = document.getElementById("bubSet1");
        bubSpeed.style.marginRight = "0";
    }

    stepBack() {
        const array = [];
        this.setState({array});
        settingDivsBack();
    }

    async doSort() {
        buttonsOff();

        const bubs =  document.getElementsByClassName('bubble');

        for(let i = 0; i < bubs.length-1; i++){
            for(let j = 0; j < bubs.length-i-1; j++){
                bubs[j].style.backgroundImage = `url(${bubbleCompare})`;
                bubs[j].style.transition = "1s";
                bubs[j+1].style.backgroundImage = `url(${bubbleCompare})`;
                bubs[j + 1].style.transition = "1s";
                if(parseInt(bubs[j].style.height) > parseInt(bubs[j+1].style.height)){
                    await wait(speed);
                    swap(bubs[j], bubs[j+1]);
                }
                bubs[j].style.backgroundImage = `url(${bubble})`;
                bubs[j+1].style.backgroundImage = `url(${bubble})`;
            }
        }

        //Bubbles flow away
        for(let i = 0; i < bubs.length; i++){
            var pixel = randomNumbers(-200, 150);
            var percentage = randomNumbers(-200, 150);
                bubs[i].style.transform = "translate(" + pixel +"px, " + percentage + "%)";

            for(let k = 9; k >=0; k--) {
                await wait(15);
                bubs[i].style.opacity = "0." + k;
            }
        }

        ending();
    }

    render () {
        const {array} = this.state;
        return (
        <div className='bubbleSort' id="body">

            <Cursor />

            <BubbleSetter 
                speedaction1={this.speedMinus}
                speedaction2={this.speedPlus}
                numberaction1={this.elementPlus}
                numberaction2={this.elementMinus} />

            <div id="donediv">
                <p id="doneText">bubble sort done</p>
            </div>

            <Picker
                action1={this.createArray}
                action2={this.showExplonation}
            />

            <Navigation
                link1="/"
                link2="/quickSort"
                link3="/mergeSort"
                link4="/insertionSort"
                link5="/countingSort"
                link6="/bucketSort"
                text1="Home"
                text2="Quick Sort"
                text3="Merge Sort"
                text4="Insertion Sort"
                text5="CountingSort"
                text6="Bucket Sort"
            />

            <div className='title' id="title">
                <h1 id="title1">bubble sort</h1>
            </div>

            <div id="explonationDiv">
                <h3 id="compare">We compare array[j] and array[j+1]</h3>
                <h3 id="swap">If array[j] &gt; array[j+1], we swap them</h3>
                <h3 id="notSwap">If array[j] &gt;! array[j+1], just keep going on</h3>
                <h3 id="finish">Now, the largest elements on their place, so from now on, we don't bother with them</h3>
                <h3 id="done">We have all the bubbles sorted!</h3>
            </div>

            <div className='bubbleDiv' id="bubbleDiv">
            {array.map((value, idx) => (
                <div id="bubble" className='bubble'
                 key={idx}
                 style={{
                     backgroundImage: `url(${bubble})`,
                     height: `${value}px`,
                     width: `${value}px`,}}>  
                 </div>
            ))}
            </div>

            <div id="bubExpImages">
                <div id="row">
                    <img src={bubble} alt=""></img>
                    <p id="expImageText">not sorted element</p>
                </div>
                <div id="row">
                    <img src={bubbleCompare} alt=""></img>
                    <p id="expImageText">comparing element</p>
                </div>
            </div>

            <div id="bckBtnDiv">
                <button
                    id="backBtn"
                    onClick={this.stepBack}>
                    &lt;
                </button>
            </div> 
            
            <div id="bttonDiv">
                <button
                    id="startBtn"
                    onClick={this.doSort}>
                    start
                </button>
                <button
                    id="againBtn"
                    onClick={this.createAgain}>
                    again
                </button>
            </div>

            <div id="expButtonDiv">
                <button
                    id="expStartBtn" onClick={this.doExplain}>
                    &gt;
                </button>
            </div>

        </div>
        )
    }
}

function randomNumbers(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function settingDivs() {
    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var startButton = document.getElementById("startBtn");
    startButton.style.display = "flex";

    var againButton = document.getElementById("againBtn");
    againButton.style.display = "flex";

    var backButton = document.getElementById("backBtn");

    backButton.style.display = "flex";

    var buttonDiv = document.getElementById("bttonDiv");
    buttonDiv.style.top = "83%";
    buttonDiv.style.left = "30.5%";

    var backButtonDiv = document.getElementById("bckBtnDiv");
    backButtonDiv.style.top = "85%";
    backButtonDiv.style.marginLeft = "60px";

    var title = document.getElementById("title");
    title.style.display = "flex";

    var bubbleBody = document.getElementById("body");
    bubbleBody.style.background = "#b264be";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var setter = document.querySelector("#setterBtn");
    setter.style.display = "flex";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";
}

function settingDivsBack() {
    var startButton = document.getElementById("startBtn");
    startButton.style.display = "none";

    var againButton = document.getElementById("againBtn");
    againButton.style.display = "none";

    var backBtn = document.getElementById("backBtn");
    backBtn.style.display = "none";

    var donediv = document.getElementById("donediv");
    donediv.style.display = "none";

    var title = document.getElementById("title");
    title.style.display = "none";

    var bubbleBody = document.getElementById("body");
    bubbleBody.style.background = "#fffefa";

    var navi = document.querySelector(".navbar");
    navi.style.display = "flex";

    var setterBtn = document.querySelector("#setterBtn");
    setterBtn.style.display = "none";

    var setter = document.querySelector(".bubSetter");
    setter.style.display = "none";

    var done = document.getElementById("done");
    done.style.opacity = "0";

    var expButtonDiv = document.getElementById("expButtonDiv");
    expButtonDiv.style.display = "none";

    var bubExpImages = document.getElementById("bubExpImages");
    bubExpImages.style.display = "none";

    var picker = document.getElementById("picker");
    picker.style.display = "block";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #000";
}

function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function swap(a, b) {
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;
    let tmp = a.style.width;
    a.style.width = b.style.width;
    b.style.width = tmp;
}

async function ending() {
    await wait(1000);
    const donediv = document.getElementById("donediv");
    donediv.style.display = "flex";
    await wait(1500);

    var againButton = document.getElementById("againBtn");
    againButton.style.display = "block";

    var backButton = document.getElementById("backBtn");
    backButton.style.display = "block";

    var title = document.getElementById("title");
    title.style.opacity = "1";
}

function settingExplonationDivs() {
    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var bubbleBody = document.getElementById("body");
    bubbleBody.style.background = "#b264be";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var expButtonDiv = document.getElementById("expButtonDiv");
    expButtonDiv.style.display = "flex";
    expButtonDiv.style.top = "83%";
    expButtonDiv.style.left = "40%";

    var bubbleDiv = document.getElementById("bubbleDiv");
    bubbleDiv.style.paddingTop = "260px";

    var setter = document.querySelector("#setterBtn")
    setter.style.display = "flex";

    var bubSetter= document.querySelector(".bubSetter");
    bubSetter.style.width = "22%";

    var bubNumber = document.getElementById("bubSet2");
    bubNumber.style.display = "none";

    var bubSpeed = document.getElementById("bubSet1");
    bubSpeed.style.marginRight = "20px";

    var backButton = document.getElementById("backBtn");
    backButton.style.display = "flex";

    var backButtonDiv = document.getElementById("bckBtnDiv");
    backButtonDiv.style.top = "85%";
    backButtonDiv.style.marginLeft = "60px";

    var bubExpImages = document.getElementById("bubExpImages");
    bubExpImages.style.display = "flex";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";
}

function imageChange(array, firstIndex, secondIndex, image) {
    array[firstIndex].style.backgroundImage = `url(${image})`;
    array[firstIndex].style.transition = "1s";
    array[secondIndex].style.backgroundImage = `url(${image})`;
    array[secondIndex].style.transition = "1s";
}

function textAppear(text) {
    text.style.opacity = "1";
    text.style.transition = "0.5s";
}

function textDisappear(text) {
    text.style.opacity = "0";
    text.style.transition = "0.5s";
}

function buttonsOff() {
    var title = document.getElementById("title");
    title.style.opacity = "0";

    var bubSetter= document.querySelector(".bubSetter");
    bubSetter.style.width = "22%";

    var bubNumber = document.getElementById("bubSet2");
    bubNumber.style.display = "none";

    var bubSpeed = document.getElementById("bubSet1");
    bubSpeed.style.marginRight = "20px";

    var startButton = document.getElementById("startBtn");
    startButton.style.display = "none";

    var againButton = document.getElementById("againBtn");
    againButton.style.display = "none";
    
    var backButton = document.getElementById("backBtn");
    backButton.style.display = "none";
}