import Navigation from "./Navigation";
import "./components/stylesheets/QuickSort/QuickSort.css";
import { Component } from "react/cjs/react.production.min";
import bcIm from "./components/stylesheets/Graphics/quickSort/quickBcDarker2.png";
import car from "./components/stylesheets/Graphics/quickSort/car.png";
import carOrange from "./components/stylesheets/Graphics/quickSort/carCompareOrange.png";
import carBlue from "./components/stylesheets/Graphics/quickSort/carCompareBlue.png";
import carRed from "./components/stylesheets/Graphics/quickSort/carCompareRed.png";
import carPink from "./components/stylesheets/Graphics/quickSort/carComparePink.png";
import carPointer from "./components/stylesheets/Graphics/quickSort/carComparePinkPointer.png";
import carWhite from "./components/stylesheets/Graphics/quickSort/car_white.png";
import QuickSetter from "./QuickSetter";
import Cursor from './Cursor';
import Picker from "./Picker";

var elementNum = 6;
var speed = 2000;

export default class QuickSort extends Component{
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
        var backButton = document.getElementById("back-btn");
        backButton.style.display = "none";

        var qucikExpStartBtn = document.getElementById("qucikExpStartBtn");
        qucikExpStartBtn.style.display = "none";

        const cars =  document.getElementsByClassName('car');
        var firstEnd = document.getElementById("firstEnd");
        var secondStart = document.getElementById("secondStart");
        var secondEnd = document.getElementById("secondEnd");
        var end = document.getElementById("end");
        var choosePivot = document.getElementById("choosePivot");
        var pivCompare = document.getElementById("pivCompare");
        var pointer1 = document.getElementById("pointer1");
        var thirdEnd = document.getElementById("thirdEnd");

        const leftmostIndex = 0;
        const rightmostIndex = cars.length -1;
        let pivotIndex = await expPartition(cars, leftmostIndex, rightmostIndex);
        
        textAppear(firstEnd);
        await wait(speed + 3000);
        textDisappear(firstEnd);
        await wait(speed);

        //sort smaller ones
        textAppear(secondStart);
        await wait(speed);
        textDisappear(secondStart);
        await wait(speed);
        await expPartition(cars, leftmostIndex, pivotIndex - 1);
        textAppear(thirdEnd);
        cars[0].style.backgroundImage = `url(${car})`;
        cars[2].style.backgroundImage = `url(${car})`;
        await wait(speed);
        textDisappear(thirdEnd);
        await wait(speed);
        textAppear(secondEnd);
        await wait(speed);
        textDisappear(secondEnd);
        await wait(speed);

        //sort bigger ones
        cars[5].style.backgroundImage= `url(${carRed})`;
        textAppear(choosePivot);
        await wait(speed);
        textDisappear(choosePivot);
        await wait(speed /2);
        textAppear(pivCompare);
        cars[4].style.backgroundImage = `url(${carBlue})`;
        await wait(speed);
        textDisappear(pivCompare);
        await wait(speed /2);
        textAppear(pointer1);
        cars[4].style.backgroundImage = `url(${carPink})`;
        await wait(speed + 2000);
        textDisappear(pointer1);
        await wait(speed);
        textAppear(thirdEnd);
        swap(cars[4], cars[5]);
        await wait(speed);
        textDisappear(thirdEnd);
        await wait(speed);
        textAppear(end);
        cars[4].style.backgroundImage = `url(${car})`;
        cars[5].style.backgroundImage = `url(${car})`;
        await wait(speed);

        backButton.style.display = "flex";
    }

    elementPlus() {
        if(elementNum >= 9) {
            elementNum = 9;
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
          array.push(randomNumbers(60, 200));
        }
        this.setState({array});
        settingDivs();
    }

    createAgain() {
        const array = [];
        const cars =  document.getElementsByClassName('car');
        for (let i = 0; i < elementNum; i++) {
            array.push(randomNumbers(60, 200));
            cars[i].style.backgroundImage = `url(${carWhite})`;
            cars[i].style.opacity = "1";
            cars[i].style.transition = "1s";
        }
        this.setState({array});
        var startButton = document.getElementById("start-btn");
        startButton.style.display = "block";

        const donediv = document.getElementById("done-Div");
        donediv.style.display = "none";

        var quickSetter= document.querySelector(".quickSetter");
        quickSetter.style.width = "25%"; 

        var quickNumber = document.getElementById("quickSet2");
        quickNumber.style.display = "flex";
        
        var quickSpeed = document.getElementById("quickSet1");
        quickSpeed.style.marginLeft = "0";
    }

    stepBack() {
        const array = [];
        this.setState({array});
        settingDivsBack();
    }

    async doSort() {
        buttonsOff();
        const cars =  document.getElementsByClassName('car');
        const leftmostIndex = 0;
        const rightmostIndex = cars.length -1;

        await quickSort(cars, leftmostIndex, rightmostIndex);

        for(let i = 0; i < cars.length; i++) {
            cars[i].style.backgroundImage = `url(${car})`;
        }

        await wait(speed); 

        for(let i = 0; i < cars.length; i++) {
            cars[i].style.opacity = "0";
        }

        ending();
    }

    render () {
        const {array} = this.state;
        return (
        <div className='quickSort' id="quickbody">

            <Cursor />

            <QuickSetter 
                speedaction1={this.speedMinus}
                speedaction2={this.speedPlus}
                numberaction1={this.elementPlus}
                numberaction2={this.elementMinus}/>

            <div id="done-Div">
                <p id="done-Text">quick sort done</p>
            </div>

            <Picker
                action1={this.createArray}
                action2={this.showExplonation}
            />

            <Navigation
                link1="/"
                link2="/bubbleSort"
                link3="/mergeSort"
                link4="/insertionSort"
                link5="/countingSort"
                link6="/bucketSort"
                text1="Home"
                text2="Bubble Sort"
                text3="Merge Sort"
                text4="Insertion Sort"
                text5="CountingSort"
                text6="Bucket Sort"
            />

            <div className='quickTitle' id="quickTitle">
                <h1 id="title">quick sort</h1>
            </div>

            <div id="qucikExplonationDiv">
                <h3 id="choosePivot">We choose the highest index value as pivot element</h3>
                <h3 id="pivCompare">We compare array[j] element with pivot</h3>
                <h3 id="swaping">If array[j] element is smaller than pivot, we swap it with the greater element found earlier,
                <br></br>where our pointer is
                <br></br><br></br>If there was a swap, we move the pointer to the next bigger element</h3>
                <h3 id="pointer1">If array[j] is bigger than the pivot element, we move on</h3>
                <h3 id="firstEnd">If we reached the pivot element, we swap it with the pointed element
                <br></br><br></br>Now we have splitted the array, pivot is on it's place,<br></br>
                the smaller elements are on it's rigth, and the biggers are on the left</h3>
                <h3 id="secondStart">Now we will sort the smaller elements</h3>
                <h3 id="secondEnd">We sorted the smaller elements, now we will sort the bigger ones</h3>
                <h3 id="thirdEnd">As the pivot element was smaller, we swap them with the pointed element</h3>
                <h3 id="end">Now we have sorted the whole array!</h3>
            </div>

            <div id="quickExpImages">
                <div id="row">
                    <img src={carWhite} alt=""></img>
                    <p id="expImageText">not sorted element</p>
                </div>
                <div id="row">
                    <img src={carRed} alt=""></img>
                    <p id="expImageText">pivot element</p>
                </div>
                <div id="row">
                    <img src={carBlue} alt=""></img>
                    <p id="expImageText">comparing element</p>
                </div>
                <div id="row">
                    <img src={carOrange} alt=""></img>
                    <p id="expImageText">smaller than pivot</p>
                </div>
                <div id="row">
                    <img src={carPink} alt=""></img>
                    <p id="expImageText">bigger than pivot</p>
                </div>
                <div id="row">
                    <img src={carPointer} alt=""></img>
                    <p id="expImageText">pointed element</p>
                </div>
                <div id="row">
                    <img src={car} alt=""></img>
                    <p id="expImageText">sorted element</p>
                </div>
            </div>

            <div className='quickDiv' id="quickDiv">
            {array.map((value, idx) => (
                <div id="car" className='car'
                 key={idx}
                 style={{
                    backgroundImage: `url(${carWhite})`,
                    height: `${value}px`,
                    width: `${value}px`,}}>  
                </div>
            ))}
            </div>

            <div id="backBtn-Div">
                <button
                    id="back-btn"
                    onClick={this.stepBack}>
                    &lt;
                </button>
            </div> 
            <div id="btn-Div">
                <button
                    id="start-btn"
                    onClick={this.doSort}>
                    start
                </button>
                <button
                    id="again-btn"
                    onClick={this.createAgain}>
                    again
                </button>
            </div>

            <div id="quickExpButtonDiv">
                <button
                    id="qucikExpStartBtn" onClick={this.doExplain}>
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
    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";

    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var startButton = document.getElementById("start-btn");
    startButton.style.display = "flex";

    var againButton = document.getElementById("again-btn");
    againButton.style.display = "flex";

    var backButton = document.getElementById("back-btn");
    backButton.style.display = "flex";

    var buttonDiv = document.getElementById("btn-Div");
    buttonDiv.style.top = "85%";

    var backButtonDiv = document.getElementById("backBtn-Div");
    backButtonDiv.style.top = "86.5%";
    backButtonDiv.style.right = "39.5%";

    var quickTitle = document.getElementById("quickTitle");
    quickTitle.style.display = "flex";  

    var quickbody = document.getElementById("quickbody");
    quickbody.style.backgroundImage = `url(${bcIm})`;
    quickbody.style.backgroundSize = "cover";
    
    var navi = document.querySelector(".navbar");
    navi.style.display = "none"; 

    var setter = document.querySelector("#quickSetterBtn");
    setter.style.display = "flex";
}

function settingDivsBack() {
    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #000";

    var picker = document.getElementById("picker");
    picker.style.display = "block";

    var startButton = document.getElementById("start-btn");
    startButton.style.display = "none";

    var againButton = document.getElementById("again-btn");
    againButton.style.display = "none";

    var backButton = document.getElementById("back-btn");
    backButton.style.display = "none";

    var quickTitle = document.getElementById("quickTitle");
    quickTitle.style.display = "none";

    var quickbody = document.getElementById("quickbody");
    quickbody.style.background = "#fffefa";

    var setterBtn = document.querySelector("#quickSetterBtn");
    setterBtn.style.display = "none";

    var setter = document.querySelector(".quickSetter");
    setter.style.display = "none";

    var navi = document.querySelector(".navbar");
    navi.style.display = "flex"; 

    var donediv = document.getElementById("done-Div");
    donediv.style.display = "none";
    var quickExpButtonDiv = document.getElementById("quickExpButtonDiv");
    quickExpButtonDiv.style.display = "none";

    var quickExpImages = document.getElementById("quickExpImages");
    quickExpImages.style.display = "none";

    var end = document.getElementById("end");
    end.style.opacity = "0";
}

async function partition(array, leftmostIndex, rightmostIndex){
    // storeIndex <- leftmostIndex - 1
    let i = leftmostIndex - 1;

    // pivot is red
    array[rightmostIndex].style.backgroundImage = `url(${carRed})`;

    // for i <- leftmostIndex + 1 to rightmostIndex
    for(let j = leftmostIndex; j <= rightmostIndex - 1; j++){ 
        // blue is what we comper with the pivot
        array[j].style.backgroundImage = `url(${carBlue})`;
        await wait(speed);

        // if element[i] < pivotElement
        if(parseInt(array[j].style.height) < parseInt(array[rightmostIndex].style.height)){ 
            // storeIndex++
            i++;

            // swap element[i] and element[storeIndex]
            swap(array[i], array[j]);

            // color orange if there was a swap
            array[i].style.backgroundImage = `url(${carOrange})`;
            if(i !== j) {
                array[j].style.backgroundImage = `url(${carPink})`;
            }
            await wait(speed);
        }
        else{
            // color pink, if there was no swap, not less than pivot
            array[j].style.backgroundImage = `url(${carPink})`;
        }
    }
    // storeIndex++
    i++; 
    await wait(speed);

    // swap pivotElement and element[storeIndex+1]
    swap(array[i], array[rightmostIndex]);
    array[rightmostIndex].style.backgroundImage = `url(${carPink})`;

    // color pivot green
    array[i].style.backgroundImage = `url(${car})`;
    await wait(speed);

    //return storeIndex + 1
    return i;
}

async function quickSort(array, leftmostIndex, rightmostIndex){
    if(leftmostIndex < rightmostIndex){ //if (leftmostIndex < rightmostIndex)
        let pivotIndex = await partition(array, leftmostIndex, rightmostIndex); //pivotIndex <- partition(array,leftmostIndex, rightmostIndex)
        await quickSort(array, leftmostIndex, pivotIndex - 1); //  quickSort(array, leftmostIndex, pivotIndex - 1)
        await quickSort(array, pivotIndex + 1, rightmostIndex); //quickSort(array, pivotIndex, rightmostIndex)
    }
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

    const donediv = document.getElementById("done-Div");
    donediv.style.display = "flex";

    await wait(1500);

    var againButton = document.getElementById("again-btn");
    againButton.style.display = "flex";

    var backButton = document.getElementById("back-btn");
    backButton.style.display = "flex";

    var buttonDiv = document.getElementById("btn-Div");
    buttonDiv.style.left = "33%";

    var quickTitle = document.getElementById("quickTitle");
    quickTitle.style.opacity = 1; 
}

function settingExplonationDivs() {
    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var quickbody = document.getElementById("quickbody");
    quickbody.style.backgroundImage = `url(${bcIm})`;
    quickbody.style.backgroundSize = "cover";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var quickExpButtonDiv = document.getElementById("quickExpButtonDiv");
    quickExpButtonDiv.style.display = "flex";
    quickExpButtonDiv.style.top = "84.5%";
    quickExpButtonDiv.style.left = "40%";

    var quickDiv = document.getElementById("quickDiv");
    quickDiv.style.paddingTop = "260px";

    var setter = document.querySelector("#quickSetterBtn");
    setter.style.display = "flex";

    var quickSetter= document.querySelector(".quickSetter");
    quickSetter.style.width = "18%";

    var quickNumber = document.getElementById("quickSet2");
    quickNumber.style.display = "none";

    var quickSpeed = document.getElementById("quickSet1");
    quickSpeed.style.marginLeft = "90px";

    var backButton = document.getElementById("back-btn");
    backButton.style.display = "flex";

    var backButtonDiv = document.getElementById("backBtn-Div");
    backButtonDiv.style.top = "86%";

    var quickExpImages = document.getElementById("quickExpImages");
    quickExpImages.style.display = "flex";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";
}

async function expPartition(array, leftmostIndex, rightmostIndex) {
    var choosePivot = document.getElementById("choosePivot");
    var pivCompare = document.getElementById("pivCompare");
    var pointer1 = document.getElementById("pointer1");
    var swaping = document.getElementById("swaping");
    
    // storeIndex <- leftmostIndex - 1
    let i = leftmostIndex - 1;
    // pivot is red
    array[rightmostIndex].style.backgroundImage = `url(${carRed})`;
    array[rightmostIndex].style.transition = "0.2s";

    choosePivot.style.opacity = "1";
    choosePivot.style.transition = "0.5s"
    await wait(speed);
    choosePivot.style.opacity = "0";
    choosePivot.style.transition = "0.5s"
    await wait(speed /2);

    // for i <- leftmostIndex + 1 to rightmostIndex
    for(let j = leftmostIndex; j <= rightmostIndex - 1; j++){
        pivCompare.style.opacity = "1";
        pivCompare.style.transition = "0.5s"

        // blue is what we comper with the pivot
        array[j].style.backgroundImage = `url(${carBlue})`;
        array[j].style.transition = "0.2s";

        await wait(speed);
        pivCompare.style.opacity = "0";
        pivCompare.style.transition = "0.5s";
        await wait(speed /2);

        // if element[i] < pivotElement
        if(parseInt(array[j].style.height) < parseInt(array[rightmostIndex].style.height)){ 
            // storeIndex++
            i++;
            array[i].style.backgroundImage = `url(${carPointer})`;
            array[i].style.transition = "0.2s";
            await wait(speed);

            // swap element[i] and element[storeIndex]
            swaping.style.opacity = "1";
            swaping.style.transition = "0.5s"
            swap(array[i], array[j]);
            console.log("swap" + i + " + " + j);

            // color orange if there was a swap
            array[i].style.backgroundImage = `url(${carOrange})`;
            if(i !== j) {
                array[j].style.backgroundImage = `url(${carPink})`;
            }
            await wait(speed + 4000);
            swaping.style.opacity = "0";
            swaping.style.transition = "0.5s";
            await wait(speed/2);
            array[i+1].style.backgroundImage = `url(${carPointer})`;
            await wait(speed);
        }
        else{
            // color pink, if there wasno swap, not less than pivot
            pointer1.style.opacity = "1";
            pointer1.style.transition = "0.5s"
            array[j].style.backgroundImage = `url(${carPink})`;
            await wait(speed + 2000);
            pointer1.style.opacity = "0";
            pointer1.style.transition = "0.5s"
            await wait(speed /2);
        }
    }
    // storeIndex++
    i++;
    await wait(speed);

    // swap pivotElement and element[storeIndex+1]
    swap(array[i], array[rightmostIndex]);

    // if pivot is swapped, then color it pink
    array[rightmostIndex].style.backgroundImage = `url(${carPink})`;

    // color element[storeIndex+1] green
    array[i].style.backgroundImage = `url(${car})`;

    await wait(speed);

    //return storeIndex + 1
    return i;
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
    var quickTitle = document.getElementById("quickTitle");
    quickTitle.style.opacity = 0; 

    var quickSetter= document.querySelector(".quickSetter");
    quickSetter.style.width = "18%";

    var quickNumber = document.getElementById("quickSet2");
    quickNumber.style.display = "none";

    var quickSpeed = document.getElementById("quickSet1");
    quickSpeed.style.marginLeft = "90px";

    var startButton = document.getElementById("start-btn");
    startButton.style.display = "none";

    var againButton = document.getElementById("again-btn");
    againButton.style.display = "none";

    var backButton = document.getElementById("back-btn");
    backButton.style.display = "none";
}
