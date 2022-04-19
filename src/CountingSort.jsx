import Navigation from "./Navigation";
import "./components/stylesheets/CountingSort/CountingSort.css";
import background from "./components/stylesheets/Graphics/countingSort/greenRedBackGround.png"
import { Component } from "react/cjs/react.production.min";
import Cursor from './Cursor';
import Picker from "./Picker";
import CountingSetter from "./CountingSetter";

var elementNum = 10; //max = 10
var speed = 2000;

export default class CountingSort extends Component {
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
        const array = [3, 5, 2, 0, 5, 10];
        const countDiv = document.getElementById("countDiv");
        countDiv.style.display = "flex";
        countDiv.style.paddingTop = "300px";
        this.setState({ array });
        settingExplonationDivs();
    }

    async doExplain() {
        var countExpButtonDiv = document.getElementById("countExpButtonDiv");
        countExpButtonDiv.style.display = "none";

        var title = document.getElementById("countTitle");
        title.style.display = "none";

        var backButton = document.getElementById("bbutton");
        backButton.style.display = "none";

        const origiCountBox = document.getElementsByClassName('count');
        const count = document.getElementsByClassName('value');
        const countDiv = document.getElementById("countDiv");
        const countBoxText = document.getElementsByClassName('countBoxText');
        const countText = document.getElementsByClassName('countText');
        const countHelper = document.getElementsByClassName('countHelper');
        const countBox = document.getElementsByClassName('countBox');
        const outputBox = document.getElementsByClassName('outputBox');
        var countBody = document.getElementById("countBody");

        const start = document.getElementById("start");
        const helpArray = document.getElementById("helpArray");
        const sum = document.getElementById("sum");
        const outPut = document.getElementById("outPut");
        const final = document.getElementById("final");
        const end = document.getElementById("end");

        const countTexts = document.createElement('div');
        countTexts.id = "countTexts";
        countBody.appendChild(countTexts);

        const countBoxes = document.createElement('div');
        countBoxes.id = "countBoxes";
        countBody.appendChild(countBoxes);

        const countHelpers = document.createElement('div');
        countHelpers.id = "countHelpers";
        countBody.appendChild(countHelpers);

        const outputBoxes = document.createElement('div');
        outputBoxes.id = "outputBoxes";
        countBody.appendChild(outputBoxes);

        const outputIndexes = document.createElement('div');
        outputIndexes.id = "outputIndexes";
        countBody.appendChild(outputIndexes);

        const array = [];
        let visited = [];

        for (let i = 0; i < array.length; i++) {
            visited[i] = false;           
        }

        for(let i = 0; i < count.length; i++) {
            array[i] = parseInt(count[i].innerText);
        }

        let max = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }

        var numbers = [max];
        for (let i = 0; i <= max; i++) {
            numbers[i] = i;
        }
        
        await wait(speed / 2);
        countDiv.style.paddingTop = "170px";
        for(let i = 0; i < count.length; i++) {
            count[i].style.fontSize = "400%";
        }
        countDiv.style.transition = "0.5s";

        await wait(speed / 2);
        countTexts.style.paddingTop = "20px";

        textAppear(start);
        await wait(speed);
        textDisappear(start);
        await wait(speed / 4);

        textAppear(helpArray);
        await wait(speed / 4);

        for(let i = 0; i < numbers.length; i++) {
            const element = document.createElement('div');
            element.className = "countText";
            element.id = "countText" + i;
            element.innerText =  numbers[i];
            countTexts.appendChild(element);
        }

        await wait(speed / 6);

        for(let i = 0; i < numbers.length; i++) {
            const element = document.createElement('div');
            element.className = "countBox";
            element.id = "countBox" + i;
            countBoxes.appendChild(element);
        }

        for(let i = 0; i < countBox.length; i++) {
            const element = document.createElement('h3');
            element.className = "countBoxText";
            element.id = "countBoxText" + i;
            element.innerText = "0";
            countBox[i].appendChild(element);
        }

        for (let i = 0; i < array.length; i++) {
            if(visited[i] === true) {

            }
            else {
                let c = 1;
                for (let j = i + 1; j < array.length; j++) {
                    if (array[i] === array[j]) {
                        visited[j] = true;
                        c++;
                    }
                }
                //Write out the counts
                for(let k = 0; k < countBox.length; k++) {
                    let z = parseInt(countText[k].innerText);
                    if(z === array[i]) {
                        await wait(speed / 2);
                        countBoxText[z].innerText = c;
                }
            }
            }
        }

        textDisappear(helpArray);
        await wait(speed / 4);

        textAppear(sum);
        await wait(speed / 4);

        const counts = [];
        const countHelpNumbers = [];

        for (let i = 0; i < countBox.length; i++) {
            counts[i] = parseInt(countBoxText[i].innerText);
            countHelpNumbers[i] = counts[i];
        }

        for(let i = 0; i < countHelpNumbers.length; i++) {
            const element = document.createElement('div');
            element.className = "countHelper";
            element.id = "countHelper" + i;
            element.innerText =  "+" + countHelpNumbers[i];
            element.style.opacity = 0;
            countHelpers.appendChild(element);
        }

        //Store the cummulative count
        for (let i = 1; i < counts.length; i++) {
            counts[i] += counts[i - 1];
        }

        //Change the count numbers to the cummulative count numbers
        for(let i = 0; i < countBox.length; i++) {
            countHelper[i].style.opacity = "1";
            countHelper[i].style.transition = "0.2s";
            await wait(speed / 4);
            countBoxText[i].innerText = counts[i];
            countBoxText[i].style.color = "#E62225";
            await wait(speed / 2);
        }

        countHelpers.style.opacity = "0";
        countHelpers.style.transition = "0.3s";

        textDisappear(sum);
        await wait(speed / 4);

        textAppear(outPut);
        await wait(speed);
        textDisappear(outPut);

        await wait(speed / 4);

        textAppear(final);

        for (let i = 0; i < array.length; i++) {
            const element = document.createElement('div');
            element.className = "outputBox";
            element.id = "outputBox" + i;
            outputBoxes.appendChild(element);
            
        }

        outputBoxes.style.paddingTop = "20px";

        for(let i = 1; i < array.length + 1; i++) {
            const element = document.createElement('div');
            element.className = "outputIndex";
            element.id = "outputIndex" + i;
            element.innerText =  i;
            outputIndexes.appendChild(element);
        }

        await wait(speed / 2); 

        for(let i = array.length - 1; i >= 0; i--) {
            origiCountBox[i].style.outline = "3px solid #fffefa";
            await wait(speed / 2); 
            countBox[array[i]].style.background = "transparent";
            countBox[array[i]].style.outline = "3px solid #fffefa";
            countBoxText[array[i]].style.color = "#fffefa";
            await wait(speed / 2); 
            outputBox[counts[array[i]] - 1].innerText = count[i].innerText;
            counts[array[i]]--;
            await wait(speed / 2);
            origiCountBox[i].style.outline = "none";
            countBox[array[i]].style.background = "#fffefa";
            countBox[array[i]].style.outline = "none";
            countBoxText[array[i]].style.color = "#f13239";
            await wait(speed / 2);
            countBoxText[array[i]].innerText = parseInt(countBox[array[i]].innerText - 1);
            countBoxText[array[i]].style.color = "#39b54a";
            await wait(speed);
        }

        textDisappear(final);

        countBoxes.remove();
        countTexts.remove();
        countDiv.style.display = "none";
        outputIndexes.remove();
        countHelpers.remove();
        outputBoxes.style.paddingTop = "275px";
        outputBoxes.style.transition = "0.2s";

        await wait(speed);
        textAppear(end);

        backButton.style.display = "flex";
        await wait(speed);
        outputBoxes.remove();

    }

    elementPlus() {
        if (elementNum > 10) {
            elementNum = 10;
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
        if (speed >= 4000) {
            speed = 4000;
        } else {
            speed += 200;
        }
    }

    speedMinus() {
        if (speed <= 200) {
            speed = 200;
        } else {
            speed += (-200);
        }
    }

    createArray() {
        const array = [];
        const countDiv = document.getElementById("countDiv");
        countDiv.style.display = "flex";
        countDiv.style.paddingTop = "300px";
        for (let i = 0; i < elementNum; i++) {
            array.push(randomNumbers(0, elementNum));
        }
        this.setState({ array });
        settingDivs();
    }

    createAgain() {
        const array = [];
        const value = document.getElementsByClassName('value');
        const countDiv = document.getElementById("countDiv");
        countDiv.style.display = "flex";
        countDiv.style.paddingTop = "300px";
        for (let i = 0; i < elementNum; i++) {
            array.push(randomNumbers(0, elementNum));
            value[i].style.fontSize = "750%";
        }
        this.setState({ array });
        var startButton = document.getElementById("sbutton");
        startButton.style.display = "block";

        const donediv = document.getElementById("countDonediv");
        donediv.style.display = "none";

        var countSetter = document.querySelector(".countSetter");
        countSetter.style.width = "22%";

        var countNumber = document.getElementById("countSet2");
        countNumber.style.display = "flex";

        var countSpeed = document.getElementById("countSet1");
        countSpeed.style.marginLeft = "0";
    }

    stepBack() {
        const array = [];
        this.setState({ array });
        settingDivsBack();
    }

    async doSort() {
        buttonsOff();

        const origiCountBox = document.getElementsByClassName('count');
        const count = document.getElementsByClassName('value');
        const countDiv = document.getElementById("countDiv");
        const countBoxText = document.getElementsByClassName('countBoxText');
        const countText = document.getElementsByClassName('countText');
        const countHelper = document.getElementsByClassName('countHelper');
        const countBox = document.getElementsByClassName('countBox');
        const outputBox = document.getElementsByClassName('outputBox');
        const outputIndex = document.getElementsByClassName('outputIndex');
        var countBody = document.getElementById("countBody");
               
        const countTexts = document.createElement('div');
        countTexts.id = "countTexts";
        countBody.appendChild(countTexts);

        const countBoxes = document.createElement('div');
        countBoxes.id = "countBoxes";
        countBody.appendChild(countBoxes);

        const countHelpers = document.createElement('div');
        countHelpers.id = "countHelpers";
        countBody.appendChild(countHelpers);

        const outputBoxes = document.createElement('div');
        outputBoxes.id = "outputBoxes";
        countBody.appendChild(outputBoxes);

        const outputIndexes = document.createElement('div');
        outputIndexes.id = "outputIndexes";
        countBody.appendChild(outputIndexes);

        const array = [];
        let visited = [];

        for (let i = 0; i < array.length; i++) {
            visited[i] = false;           
        }

        for(let i = 0; i < count.length; i++) {
            array[i] = parseInt(count[i].innerText);
        }
        
        let max = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }

        var numbers = [max];

        for (let i = 0; i <= max; i++) {
            numbers[i] = i;
            
        }

        await wait(speed / 2);
        countDiv.style.paddingTop = "100px";
        for(let i = 0; i < count.length; i++) {
            count[i].style.fontSize = "500%";
        }
        countDiv.style.transition = "0.5s";

        //Create texts for count array
        await wait(speed / 2);
        for(let i = 0; i < numbers.length; i++) {
            const element = document.createElement('div');
            element.className = "countText";
            element.id = "countText" + i;
            element.innerText =  numbers[i];
            countTexts.appendChild(element);
        }

        //Create count array
        await wait(speed / 6);

        for(let i = 0; i < numbers.length; i++) {
            const element = document.createElement('div');
            element.className = "countBox";
            element.id = "countBox" + i;
            countBoxes.appendChild(element);
        }

        for(let i = 0; i < countBox.length; i++) {
            const element = document.createElement('h3');
            element.className = "countBoxText";
            element.id = "countBoxText" + i;
            element.innerText = "0";
            countBox[i].appendChild(element);
        }

        //Store the count of each elements
        for (let i = 0; i < array.length; i++) {
            if(visited[i] === true) {

            }
            else {
                let c = 1;
                for (let j = i + 1; j < array.length; j++) {
                    if (array[i] === array[j]) {
                        visited[j] = true;
                        c++;
                    }
                }
                //Write out the counts
                for(let k = 0; k < countBox.length; k++) {
                    let z = parseInt(countText[k].innerText);
                    if(z === array[i]) {
                        await wait(speed / 2);
                        countBoxText[z].innerText = c;
                }
            }
            }
        }

        await wait(speed / 2);
        const counts = [];
        const countHelpNumbers = [];

        for (let i = 0; i < countBox.length; i++) {
            counts[i] = parseInt(countBoxText[i].innerText);
            countHelpNumbers[i] = counts[i];
        }

        //Create numbers to help the cummulitive count
        for(let i = 0; i < countHelpNumbers.length; i++) {
            const element = document.createElement('div');
            element.className = "countHelper";
            element.id = "countHelper" + i;
            element.innerText =  "+" + countHelpNumbers[i];
            element.style.opacity = 0;
            countHelpers.appendChild(element);
        }

        //Store the cummulative count
        for (let i = 1; i < counts.length; i++) {
            counts[i] += counts[i - 1];
        }

        //Change the count numbers to the cummulative count numbers
        for(let i = 0; i < countBox.length; i++) {
            countHelper[i].style.opacity = "1";
            countHelper[i].style.transition = "0.2s";
            await wait(speed / 4);
            countBoxText[i].innerText = counts[i];
            countBoxText[i].style.color = "#E62225";
            await wait(speed / 2);
        }

        countHelpers.style.opacity = "0";
        countHelpers.style.transition = "0.3s";

        await wait(speed / 2);

        //Create the output array
        for (let i = 0; i < array.length; i++) {
            const element = document.createElement('div');
            element.className = "outputBox";
            element.id = "outputBox" + i;
            outputBoxes.appendChild(element);      
        }

        //Create the output array's indexes
        for(let i = 1; i < array.length + 1; i++) {
            const element = document.createElement('div');
            element.className = "outputIndex";
            element.id = "outputIndex" + i;
            element.innerText =  i;
            outputIndexes.appendChild(element);
        }


        await wait(speed / 2);    

        for(let i = array.length - 1; i >= 0; i--) {
            origiCountBox[i].style.outline = "3px solid #fffefa";
            await wait(speed / 2); 
            countBox[array[i]].style.background = "transparent";
            countBox[array[i]].style.outline = "3px solid #fffefa";
            countBoxText[array[i]].style.color = "#fffefa";
            await wait(speed / 2); 
            outputBox[counts[array[i]] - 1].innerText = count[i].innerText;
            counts[array[i]]--;
            await wait(speed / 2);
            origiCountBox[i].style.outline = "none";
            countBox[array[i]].style.background = "#fffefa";
            countBox[array[i]].style.outline = "none";
            countBoxText[array[i]].style.color = "#f13239";
            await wait(speed / 2);
            countBoxText[array[i]].innerText = parseInt(countBox[array[i]].innerText - 1);
            countBoxText[array[i]].style.color = "#39b54a";
            await wait(speed);
        }

        await wait(speed / 2);

       countBoxes.remove();
       countTexts.remove();
       countHelpers.remove();
       countDiv.style.display = "none";
       outputIndexes.remove();
       outputBoxes.style.paddingTop = "280px";
       outputBoxes.style.transition = "0.2s";
       await wait(speed);
       ending();
    }

    render() {
        const { array } = this.state;
        return (
            <div className='countingSort' id="countBody">

                <Cursor />

                <div id="countDonediv">
                    <p id="countDoneTxt">counting sort done</p>
                </div>

                <CountingSetter 
                    speedaction1={this.speedMinus}
                    speedaction2={this.speedPlus}
                    numberaction1={this.elementPlus}
                    numberaction2={this.elementMinus} />

                <Picker
                    action1={this.createArray}
                    action2={this.showExplonation}
                />

                <Navigation
                    link1="/"
                    link2="/bubbleSort"
                    link3="/quickSort"
                    link4="/mergeSort"
                    link5="/insertionSort"
                    link6="/bucketSort"
                    text1="Home"
                    text2="Bubble Sort"
                    text3="Quick Sort"
                    text4="Merge Sort"
                    text5="Insertion Sort"
                    text6="Bucket Sort"
                />


                <h1 id="countTitle">Counting Sort</h1>

                <div id="countExplonationDiv">
                    <h3 id="start">We start the sorting by picking the maximum value from the array</h3>
                    <h3 id="helpArray">Then, we create a new array with the size of the maximum value
                    <br></br>We use it for storing the count of the elements in the original array</h3>
                    <h3 id="sum">Next step is to calculate the cumulative sum of the elements of the count array</h3>
                    <h3 id="outPut">Finally, we put together the output array</h3>
                    <h3 id="final">We're going backwards in the original array, and put the element in the output array
                    <br></br>at index of the stored cumulative sum value, then decrease the cumulative sum value</h3>
                    <h3 id="end">Now we sorted the whole array!</h3>
                </div>

                <div className='countDiv' id="countDiv">
                    {array.map((value, idx) => (
                        <div id="count" className='count'
                            key={idx}><h3 className='value'>{value}</h3></div>
                    ))}
                </div>

                <div id="bcdiv">
                    <button
                        id="bbutton"
                        onClick={this.stepBack}>
                       <h3 id="backText">&lt;</h3>
                    </button>
                </div>

                <div id="budiv">
                    <button
                        id="sbutton"
                        onClick={this.doSort}> <h3 id="startText">start</h3>
                    </button>
                    <button
                        id="abutton"
                        onClick={this.createAgain}><h3 id="againText">again</h3>
                    </button>
                </div>

                <div id="countExpButtonDiv">
                    <button id="countExpStartBtn" onClick={this.doExplain}><h3 id="expButtonText">&lt;</h3></button>
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

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";

    var startButton = document.getElementById("sbutton");
    startButton.style.display = "flex";

    var againButton = document.getElementById("abutton");
    againButton.style.display = "flex";

    var backButton = document.getElementById("bbutton");
    backButton.style.display = "flex";

    var buttonDiv = document.getElementById("budiv");
    buttonDiv.style.top = "80%";
    buttonDiv.style.left = "29%";

    var backButtonDiv = document.getElementById("bcdiv");
    backButtonDiv.style.top = "83%";
    backButtonDiv.style.left = "5%";

    var title = document.getElementById("countTitle");
    title.style.display = "flex";

    var countBody = document.getElementById("countBody");
    countBody.style.background = `url(${ background })`;
    countBody.style.backgroundSize = "cover";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var setterBtn = document.querySelector("#countSetterBtn");
    setterBtn.style.display = "flex";

    var setter = document.querySelector(".countSetter");
    setter.style.display = "block";

    const donediv = document.getElementById("countDonediv");
    donediv.style.display = "none";
}

function settingDivsBack() {
    var picker = document.getElementById("picker");
    picker.style.display = "block";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #000";

    var startButton = document.getElementById("sbutton");
    startButton.style.display = "none";

    var againButton = document.getElementById("abutton");
    againButton.style.display = "none";

    var backButton = document.getElementById("bbutton");
    backButton.style.display = "none";

    var countBody = document.getElementById("countBody");
    countBody.style.background = "#fffefa";

    var title = document.getElementById("countTitle");
    title.style.display = "none";

    var navi = document.querySelector(".navbar");
    navi.style.display = "flex";

    var countExpButtonDiv = document.getElementById("countExpButtonDiv");
    countExpButtonDiv.style.display = "none";

    const donediv = document.getElementById("countDonediv");
    donediv.style.display = "none";

    var setterBtn = document.querySelector("#countSetterBtn");
    setterBtn.style.display = "none";

    var setter = document.querySelector(".countSetter");
    setter.style.display = "none";

    const end = document.getElementById("end");
    end.style.opacity = "0";
}

function wait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

async function ending() {
    await wait(speed / 2);

    const outputBoxes = document.getElementById("outputBoxes");
    outputBoxes.remove();
    await wait(1000);

    const donediv = document.getElementById("countDonediv");
    donediv.style.display = "flex";

    await wait(1500);

    var againButton = document.getElementById("abutton");
    againButton.style.display = "block";

    var backButton = document.getElementById("bbutton");
    backButton.style.display = "block";

    var title = document.getElementById("countTitle");
    title.style.opacity = "1";
}

function settingExplonationDivs() {
    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";

    var backButton = document.getElementById("bbutton");
    backButton.style.display = "flex";

    var title = document.getElementById("countTitle");
    title.style.display = "flex";

    var countBody = document.getElementById("countBody");
    countBody.style.background = `url(${ background })`;
    countBody.style.backgroundSize = "cover";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var setter = document.querySelector("#countSetterBtn");
    setter.style.display = "flex";

    var countExpButtonDiv = document.getElementById("countExpButtonDiv");
    countExpButtonDiv.style.display = "flex";
    countExpButtonDiv.style.top = "76.5%";
    countExpButtonDiv.style.left = "40%";

    var backButtonDiv = document.getElementById("bcdiv");
    backButtonDiv.style.top = "80.5%";
    backButtonDiv.style.left = "5%";

    var countSetter = document.querySelector(".countSetter");
    countSetter.style.width = "15%";

    var countNumber = document.getElementById("countSet2");
    countNumber.style.display = "none";

    var countSpeed = document.getElementById("countSet1");
    countSpeed.style.marginLeft = "70px";
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
    var title = document.getElementById("countTitle");
    title.style.opacity = "0";

    var countSetter = document.querySelector(".countSetter");
    countSetter.style.width = "15%";

    var countNumber = document.getElementById("countSet2");
    countNumber.style.display = "none";

    var countSpeed = document.getElementById("countSet1");
    countSpeed.style.marginLeft = "70px";

    var startButton = document.getElementById("sbutton");
    startButton.style.display = "none";

    var againButton = document.getElementById("abutton");
    againButton.style.display = "none";

    var backButton = document.getElementById("bbutton");
    backButton.style.display = "none";
}

