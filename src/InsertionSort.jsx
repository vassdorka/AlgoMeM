import Navigation from "./Navigation";
import InsertionSetter from "./InsertionSetter";
import './components/stylesheets/InsertionSort/InsertionSort.css';
import hand from "./components/stylesheets/Graphics/insertionSort/handSimple.png";
import handCompare from "./components/stylesheets/Graphics/insertionSort/handCompare.png";
import handFinish from "./components/stylesheets/Graphics/insertionSort/handFinish.png";
import insertText from "./components/stylesheets/Graphics/insertionSort/insertionNeonTitle.png";
import { Component } from "react/cjs/react.production.min";
import Cursor from './Cursor';
import Picker from "./Picker";

var elementNum = 6; //max = 6
var speed = 2000;

export default class InsertionSort extends Component {
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
        this.setState({ array });
        settingExplonationDivs();
    }

    async doExplain() {
        var backButton = document.getElementById("back-button");
        backButton.style.display = "none";

        var insertExpButtonDiv = document.getElementById("insertExpButtonDiv");
        insertExpButtonDiv.style.display = "none";

        var firstStep = document.getElementById("firstStep");
        var keyTxt = document.getElementById("key");
        var comparison = document.getElementById("comparison");
        var placeKey = document.getElementById("placeKey");
        var expEnd = document.getElementById("expEnd");

        const combs = document.getElementsByClassName('comb');
        var size = combs.length;
        textAppear(firstStep);
        combs[0].style.backgroundImage = `url(${handFinish})`;
        await wait(speed);
        textDisappear(firstStep);
        await wait(speed);

        //i = step
        for (let i = 1; i < size; i++) {
            var j = i - 1;
            var key = combs[i].style.height;
            var keyW = combs[i].style.width;

            textAppear(keyTxt);
            await wait(speed / 2);
            combs[i].style.backgroundImage = `url(${handCompare})`;
            combs[i].style.transition = "0.05s";
            await wait(speed);
            textDisappear(keyTxt);

            await wait(speed);

            textAppear(comparison);
            await wait(speed * 2);
            while (j >= 0 && (parseInt(key) < parseInt(combs[j].style.height))) {
                combs[j].style.backgroundImage = `url(${handCompare})`;
                combs[j + 1].style.height = combs[j].style.height;
                combs[j + 1].style.width = combs[j].style.width;
                combs[j + 1].style.transition = "0.05s";
                j--;
                await wait(speed);

                for (let k = i; k >= 0; k--) {
                    combs[k].style.backgroundImage = `url(${handFinish})`;
                    combs[j + 1].style.transition = "0.05s";
                }
            }

            await wait(speed);
            textDisappear(comparison);

            await wait(speed);
            textAppear(placeKey);

            await wait(speed);
            combs[j + 1].style.height = key;
            combs[j + 1].style.width = keyW;
            await wait(speed * 5);
            textDisappear(placeKey);

            combs[i].style.backgroundImage = `url(${handFinish})`;
            combs[i].style.transition = "0.05s";
            combs[j + 1].style.transition = "0.05s";
        }

        await wait(speed);
        textAppear(expEnd);
        await wait(speed);
        backButton.style.display = "flex";
    }

    elementPlus() {
        if (elementNum > 8) {
            elementNum = 8;
        } else {
            elementNum++;
            this.createArray();
        }
    }

    elementMinus() {
        if (elementNum <= 3) {
            elementNum = 3;
        } else {
            elementNum--;
            this.createArray();
        }
    }

    speedPlus() {
        if (speed <= 200) {
            speed = 200;
        } else {
            speed += (-200);
        }
    }

    speedMinus() {
        if (speed >= 4000) {
            speed = 4000;
        } else {
            speed += 200;
        }
    }

    createArray() {
        const array = [];
        for (let i = 0; i < elementNum; i++) {
            array.push(randomNumbers(100, 200));
        }
        this.setState({ array });
        settingDivs();
    }

    createAgain() {
        const array = [];
        const hands = document.getElementsByClassName('hand');
        for (let i = 0; i < elementNum; i++) {
            array.push(randomNumbers(100, 200));
            hands[i].style.backgroundImage = `url(${hand})`;
            hands[i].style.opacity = "1";
            hands[i].style.transition = "1s";
        }
        this.setState({ array });

        var startButton = document.getElementById("start-button");
        startButton.style.display = "block";

        const insertDonediv = document.getElementById("insertDonediv");
        insertDonediv.style.display = "none";

        var insertSetter = document.querySelector(".setter");
        insertSetter.style.width = "25%";

        var insertNumber = document.getElementById("set2");
        insertNumber.style.display = "flex";

        var insertSpeed = document.getElementById("set1");
        insertSpeed.style.marginLeft = "0";
    }

    stepBack() {
        const array = [];
        this.setState({ array });
        settingDivsBack();
    }

    async doSort() {
        buttonsOff();

        const hands = document.getElementsByClassName('hand');
        hands[0].style.backgroundImage = `url(${handFinish})`;

        for (let i = 1; i < hands.length; i++) {
            var j = i - 1;

            var key = hands[i].style.height;
            var keyW = hands[i].style.width;
            
            //Change the comparing element's background
            hands[i].style.backgroundImage = `url(${handCompare})`;
            hands[i].style.transition = "0.05s";

            await wait(speed);

            while (j >= 0 && (parseInt(key) < parseInt(hands[j].style.height))) {
                hands[j].style.backgroundImage = `url(${handCompare})`;
                console.log("j: " + j);
                hands[j + 1].style.height = hands[j].style.height;
                hands[j + 1].style.width = hands[j].style.width;
                hands[j + 1].style.transition = "0.05s";
                j--;
                await wait(speed);
                for (let k = i; k >= 0; k--) {
                    hands[k].style.backgroundImage = `url(${handFinish})`;
                    hands[j + 1].style.transition = "0.05s";
                }
            }
            //If there is no bigger element. then change sizes
            hands[j + 1].style.height = key;
            hands[j + 1].style.width = keyW;

            hands[i].style.backgroundImage = `url(${handFinish})`;

            hands[i].style.transition = "0.05s";
            hands[j + 1].style.transition = "0.05s";

        }

        for (let i = 0; i < hands.length; i++) {
            for (let k = 9; k >= 0; k--) {
                await wait(15);
                hands[i].style.opacity = "0." + k;
            }
        }

        ending();
    }

    render() {
        const { array } = this.state;
        return (
            <div className='insertionSort' id="isnertBody">

                <Cursor />

                <InsertionSetter
                    speedaction1={this.speedPlus}
                    speedaction2={this.speedMinus}
                    numberaction1={this.elementPlus}
                    numberaction2={this.elementMinus} />

                <div id="insertDonediv">
                    <p id="insertDoneTxt">insertion sort done</p>
                </div>

                <Picker
                    action1={this.createArray}
                    action2={this.showExplonation}
                />

                <Navigation
                    link1="/"
                    link2="/bubbleSort"
                    link3="/quickSort"
                    link4="/mergeSort"
                    link5="/countingSort"
                    link6="/bucketSort"
                    text1="Home"
                    text2="Bubble Sort"
                    text3="Quick Sort"
                    text4="Merge Sort"
                    text5="CountingSort"
                    text6="Bucket Sort"
                />

                <div className='insertionTitle' id="insertionTitle">
                    <img src={insertText} alt="" />
                </div>

                <div id="insertExplonationDiv">
                    <h3 id="firstStep">We start the sorting by assuming the first element to be sorted</h3>
                    <h3 id="key">We take the next element and store it in a key variable</h3>
                    <h3 id="comparison">Then we compare key with each element on the left of it
                        <br></br>until we find a smaller element</h3>
                    <h3 id="placeKey">If there was a smaller element, then we place the key after it
                        <br></br>If there wasn't, we will place the key element at the beginning of the array
                        <br></br><br></br>When we placed the key, we pick the next element and find it's position
                        <br></br>based on the same principle</h3>
                    <h3 id="expEnd">Now we sorted the whole array!</h3>
                </div>

                <div id="insertExpImages">
                    <div id="row">
                        <img src={hand} alt=""></img>
                        <p id="expImageText">NOT SORTED ELEMENT</p>
                    </div>
                    <div id="row">
                        <img src={handCompare} alt=""></img>
                        <p id="expImageText">KEY COMPARISON</p>
                    </div>
                    <div id="row">
                        <img src={handFinish} alt=""></img>
                        <p id="expImageText">SORTED ELEMENT</p>
                    </div>
                </div>

                <div className='insertionDiv' id="insertionDiv">
                    {array.map((value, idx) => (
                        <div id="hand" className='hand'
                            key={idx}
                            style={{
                                backgroundImage: `url(${hand})`,
                                height: `${value}px`,
                                width: `${value}px`
                            }}>
                        </div>
                    ))}
                </div>

                <div id="back-div">
                    <button
                        id="back-button"
                        onClick={this.stepBack}>
                        &lt;
                    </button>
                </div>

                <div id="button-div">
                    <button
                        id="start-button"
                        onClick={this.doSort}>
                    </button>
                    <button
                        id="again-button"
                        onClick={this.createAgain}>
                    </button>
                </div>

                <div id="insertExpButtonDiv">
                    <button id="insertExpStartBtn" onClick={this.doExplain}></button>
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
    var startButton = document.getElementById("start-button");
    startButton.style.display = "flex";

    var againButton = document.getElementById("again-button");
    againButton.style.display = "flex";

    var backButton = document.getElementById("back-button");
    backButton.style.display = "flex";

    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.top = "83%";
    buttonDiv.style.left = "24%";

    var backButtonDiv = document.getElementById("back-div");
    backButtonDiv.style.top = "85%";
    backButtonDiv.style.left = "5%";

    var title = document.getElementById("insertionTitle");
    title.style.display = "flex";

    var isnertBody = document.getElementById("isnertBody");
    isnertBody.style.background = "#000";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var setterBtn = document.querySelector("#setterBtn");
    setterBtn.style.display = "flex";

    var setter = document.querySelector(".setter");
    setter.style.display = "block";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";

    var picker = document.getElementById("picker");
    picker.style.display = "none";
}

function settingDivsBack() {
    var startButton = document.getElementById("start-button");
    startButton.style.display = "none";

    var againButton = document.getElementById("again-button");
    againButton.style.display = "none";

    var backButton = document.getElementById("back-button");
    backButton.style.display = "none";

    var isnertBody = document.getElementById("isnertBody");
    isnertBody.style.background = "#fffefa";

    var title = document.getElementById("insertionTitle");
    title.style.display = "none";

    var navi = document.querySelector(".navbar");
    navi.style.display = "flex";

    var setterBtn = document.querySelector("#setterBtn");
    setterBtn.style.display = "none";

    var setter = document.querySelector(".setter");
    setter.style.display = "none";

    var insertExpImages = document.getElementById("insertExpImages");
    insertExpImages.style.display = "none";

    var insertExpButtonDiv = document.getElementById("insertExpButtonDiv");
    insertExpButtonDiv.style.display = "none";


    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #000";

    var picker = document.getElementById("picker");
    picker.style.display = "block";
}

function wait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

async function ending() {
    await wait(1000);
    const insertDonediv = document.getElementById("insertDonediv");
    insertDonediv.style.display = "flex";
    await wait(1500);

    var againButton = document.getElementById("again-button");
    againButton.style.display = "block";

    var backButton = document.getElementById("back-button");
    backButton.style.display = "block";

    var title = document.getElementById("insertionTitle");
    title.style.opacity = "1";
}

function settingExplonationDivs() {
    var isnertBody = document.getElementById("isnertBody");
    isnertBody.style.background = "#000";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var insertExpButtonDiv = document.getElementById("insertExpButtonDiv");
    insertExpButtonDiv.style.display = "flex";
    insertExpButtonDiv.style.top = "80.5%";
    insertExpButtonDiv.style.left = "38%";

    var insertionDiv = document.getElementById("insertionDiv");
    insertionDiv.style.paddingTop = "260px";

    var setter = document.querySelector("#setterBtn");
    setter.style.display = "flex";

    var insertSetter = document.querySelector(".setter");
    insertSetter.style.width = "18%";

    var insertNumber = document.getElementById("set2");
    insertNumber.style.display = "none";

    var insertSpeed = document.getElementById("set1");
    insertSpeed.style.marginLeft = "90px";

    var backButton = document.getElementById("back-button");
    backButton.style.display = "flex";

    var backButtonDiv = document.getElementById("back-div");
    backButtonDiv.style.top = "85.5%";

    var insertExpImages = document.getElementById("insertExpImages");
    insertExpImages.style.display = "flex";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";

    var picker = document.getElementById("picker");
    picker.style.display = "none";
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
    var title = document.getElementById("insertionTitle");
    title.style.opacity = "0";

    var insertSetter = document.querySelector(".setter");
    insertSetter.style.width = "18%";

    var insertNumber = document.getElementById("set2");
    insertNumber.style.display = "none";

    var insertSpeed = document.getElementById("set1");
    insertSpeed.style.marginLeft = "90px";

    var startButton = document.getElementById("start-button");
    startButton.style.display = "none";

    var againButton = document.getElementById("again-button");
    againButton.style.display = "none";

    var backButton = document.getElementById("back-button");
    backButton.style.display = "none";
}

