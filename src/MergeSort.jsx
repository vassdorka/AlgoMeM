import Navigation from "./Navigation";
import './components/stylesheets/MergeSort/MergeSort.css';
import comb from "./components/stylesheets/Graphics/mergeSort/newComb.png";
import combCompare1 from "./components/stylesheets/Graphics/mergeSort/newCombCompare1.png";
import combCompare2 from "./components/stylesheets/Graphics/mergeSort/newCombCompare2.png";
import combFinish from "./components/stylesheets/Graphics/mergeSort/newCombFinish.png";
import { Component } from "react/cjs/react.production.min";
import MergeSetter from "./MergeSetter";
import Cursor from './Cursor';
import Picker from "./Picker";

var elementNum = 7;
var speed = 1000;

export default class MergeSort extends Component{
    constructor() {
        super();
        this.createArray = this.createArray.bind(this);
        this.createAgain = this.createAgain.bind(this);
        this.mergeSort = this.doSort.bind(this);
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
        const array = [190, 150, 160, 90, 220, 140];
        this.setState({array});
        settingExplonationDivs();
    }

    async doExplain() {
        var mergeExpButtonDiv = document.getElementById("mergeExpButtonDiv");
        mergeExpButtonDiv.style.display = "none";

        var backButton = document.getElementById("backButton");
        backButton.style.display = "none";

        const combs = document.getElementsByClassName('combs');
        var startAlgo = document.getElementById("start");
        var mergeStart = document.getElementById("mergeStart");
        var firstEnd = document.getElementById("firstEnd");
        var secondStart = document.getElementById("secondStart");
        var secondEnd = document.getElementById("secondEnd");
        var pointers = document.getElementById("pointers");
        var finalSort = document.getElementById("finalSort");

        const start = 0;
        const end = parseInt(combs.length) - 1;
        const middle = start + Math.floor((end - start) / 2);

        textAppear(startAlgo);
        await wait(speed * 6);
        textDisappear(startAlgo);
        await wait(speed);
        textAppear(mergeStart);
        await mergeSort(combs, start, middle);
        textDisappear(mergeStart);
        await wait(speed);
        textAppear(firstEnd);
        await wait(speed * 8);
        textDisappear(firstEnd);
        textAppear(secondStart);
        await mergeSort(combs, middle + 1, end);
        textDisappear(secondStart);
        await wait(speed);
        textAppear(secondEnd);
        await wait(speed * 8);
        textDisappear(secondEnd);
        await wait(speed);
        textAppear(pointers);
        await wait(speed * 8);
        textDisappear(pointers);
        await wait(speed);
        textAppear(finalSort);
        await expMerge(combs, start, middle, end);
        await wait(speed);
        textDisappear(finalSort);
        await wait(speed * 4);

        backButton.style.display = "flex";
    }

    elementPlus() {
        if(elementNum >= 10) {
            elementNum = 10;
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
          array.push(randomNumbers(80, 180));
        }
        this.setState({array});
        settingDivs();
    } 

    createAgain() {
        const array = [];
        for (let i = 0; i < elementNum; i++) {
          array.push(randomNumbers(80, 180));
          const combs = document.getElementsByClassName('combs');
          combs[i].style.backgroundImage = `url(${comb})`;
          combs[i].style.opacity = "1";
          combs[i].style.transition = "0.8s";
        }
        this.setState({array});
        var startButton = document.getElementById("startButton");
        startButton.style.display = "block";

        const doneDiv = document.getElementById("doneTxt");
        doneDiv.style.display = "none";

        var mergeSetter = document.querySelector(".mergeSetter");
        mergeSetter.style.width = "28%";

        var mergeNumber = document.getElementById("mergeSet2");
        mergeNumber.style.display = "flex";

        var mergeSpeed = document.getElementById("mergeSet1");
        mergeSpeed.style.marginLeft = "0";
    }

    stepBack() {
        const array = [];
        this.setState({array});
        var againButton = document.getElementById("againButton");
        againButton.style.display = "none";
        settingDivsBack();
    }

    doSort() {
        buttonsOff();

        const combs = document.getElementsByClassName('combs');
        const start = 0;
        const end = parseInt(combs.length) - 1;
        mergeSort(combs, start, end);

      }
    
    render () {
        const {array} = this.state;
        return (
        <div className='mergeSort' id="mergeBody">

            <Cursor /> 
             
            <MergeSetter 
                speedaction1={this.speedMinus}
                speedaction2={this.speedPlus}
                numberaction1={this.elementPlus}
                numberaction2={this.elementMinus}/>

            <div className='doneDiv' id="doneDiv">
                <p id="doneTxt">merge sort done</p>
            </div>

            <Picker
                action1={this.createArray}
                action2={this.showExplonation}
            />

            <Navigation
                link1="/"
                link2="/bubbleSort"
                link3="/quickSort"
                link4="/insertionSort"
                link5="/countingSort"
                link6="/bucketSort"
                text1="Home"
                text2="Bubble Sort"
                text3="Quick Sort"
                text4="Insertion Sort"
                text5="CountingSort"
                text6="Bucket Sort"
            />

            <div className='mergeTitle' id="mergeTitle">
                <h1 id="title">merge sort</h1>
            </div>

            <div id="mergeExplonationDiv">
                <h3 id="start">We start the algorith with dividing the array into halves,
                <br></br>making subarrays until they all each comprising 1 element</h3>

                <h3 id="mergeStart">When we have the subarrays L and M with 1 element, we start
                <br></br>the merge process and combine the subarrays into larger, sorted arrays</h3>

                <h3 id="firstEnd">First we call MergeSort() for the first half of the original array
                <br></br><br></br>  MergeSort(originalArray, start, middle); </h3>

                <h3 id="secondStart">Then, we sort the second half of the original array
                <br></br><br></br> MergeSort(originalArray, middle + 1, end); </h3>

                <h3 id="secondEnd">If we sorted the second half too, we will call the MergeSort()
                <br></br>for the two subarray and combine them together
                <br></br><br></br>  MergeSort(originalArray, start, middle, end); </h3>

                <h3 id="pointers">We use three pointers, one for each of the two subbarrays
                <br></br>and one for maintaining the current index of the final sorted array</h3>

                <h3 id="finalSort">Until we reach the end of either L or M, we pick the larger among the elements
                <br></br>from he two subarrays and place them in the correct position at the final array
                <br></br><br></br>When we run out of elements in either L or M, we pick up the remaining elements
                <br></br>and put them in the final array</h3>

                <h3 id="end">Now we have sorted the whole array!</h3>
            </div>

            <div id="mergeExpImages">
                <div id="row">
                    <img src={comb} alt=""></img>
                    <p id="expImageText">not sorted element</p>
                </div>
                <div id="row">
                    <img src={combCompare1} alt=""></img>
                    <p id="expImageText">comparing L[i]</p>
                </div>
                <div id="row">
                    <img src={combCompare2} alt=""></img>
                    <p id="expImageText">comparing M[j]</p>
                </div>
                <div id="row">
                    <img src={combFinish} alt=""></img>
                    <p id="expImageText">sorted element</p>
                </div>
            </div>

            <div className='mergeDiv' id="mergeDiv">
            {array.map((value, idx) => (
                <div id="combs" className='combs'
                 key={idx}
                 style={{
                     backgroundImage: `url(${comb})`,
                     height: `${value}px`,
                     width: `${value}px`}}>    
                 </div>
            ))}
            </div>
            <div id="backBtnDiv">
                <button
                    id="backButton"
                    onClick={this.stepBack}>
                    &lt;
                </button>
            </div>     
            <div id="btnDiv">
                <button
                    id="startButton"
                    onClick={this.doSort}>
                    start
                </button>
                <button
                    id="againButton"
                    onClick={this.createAgain}>
                    again
                </button>
            </div>

            <div id="mergeExpButtonDiv">
                <button
                    id="mergeExpStartBtn" onClick={this.doExplain}>
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
    var againButton = document.getElementById("againButton");
    againButton.style.display = "flex";

    var startButton = document.getElementById("startButton");
    startButton.style.display = "flex";

    var backButton = document.getElementById("backButton");
    backButton.style.display = "flex";

    var backBtnDiv= document.getElementById("backBtnDiv");
    backBtnDiv.style.top = "88%";
    backBtnDiv.style.right = "87.5%";

    var btnDiv = document.getElementById("btnDiv");
    btnDiv.style.top = "85%";
    btnDiv.style.right = "31%";

    var title = document.getElementById("mergeTitle");
    title.style.display = "flex";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var mergeBody = document.getElementById("mergeBody");
    mergeBody.style.background = "#3E07DA";

    var mergeSetterBtn = document.querySelector("#mergeSetterBtn");
    mergeSetterBtn.style.display = "flex";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";

    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var mergeSetter = document.querySelector(".mergeSetter");
    mergeSetter.style.display = "block";
}

function settingDivsBack() {
    var againButton = document.getElementById("againButton");
    againButton.style.display = "none";

    var startButton = document.getElementById("startButton");
    startButton.style.display = "none";

    var backButton = document.getElementById("backButton");
    backButton.style.display = "none";

    var doneDiv = document.getElementById("doneDiv");
    doneDiv.style.display = "none";

    var mergeTitle = document.getElementById("mergeTitle");
    mergeTitle.style.display = "none";

    var mergeBody = document.getElementById("mergeBody");
    mergeBody.style.background = "#fffefa";

    var mergeSetterBtn = document.querySelector("#mergeSetterBtn");
    mergeSetterBtn.style.display = "none";

    var mergeSetter = document.querySelector(".mergeSetter");
    mergeSetter.style.display = "none";

    var navi = document.querySelector(".navbar");
    navi.style.display = "flex";

    var mergeExpButtonDiv = document.getElementById("mergeExpButtonDiv");
    mergeExpButtonDiv.style.display = "none";

    var mergeExpImages= document.getElementById("mergeExpImages");
    mergeExpImages.style.display = "none";

    var mergeEnd = document.getElementById("end");
    mergeEnd.style.opacity = "0";

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

async function merge(array, start, middle, end){
    const n1 = middle - start + 1;
    const n2 = end - middle;
    //Define subarrays
    let L = [n1];
    let M = [n2];

    //Highlight the compared elemets
    for(let i = 0; i < n1; i++){
        await wait(speed);

        array[start + i].style.backgroundImage = `url(${combCompare1})`;
        array[start + i].style.transition = "0.1s";
        L[i] = array[start + i].style.height;
    }

    for(let j = 0; j < n2; j++){
        await wait(speed);

        array[middle + 1 + j].style.backgroundImage = `url(${combCompare2})`;
        array[middle + 1 + j].style.transition = "0.1s";
        M[j] = array[middle + 1 + j].style.height;
    }
    await wait(speed);

    let i = 0;
    let j = 0;
    let k = start;

    //Sorting while the end of subarrays
    while(i < n1 && j < n2){
        await wait(speed);
  
        if(parseInt(L[i]) <= parseInt(M[j])){

            if((n1 + n2) === array.length) {
                ending();
            }else {
                console.log("else: " + n1, n2)
                array[k].style.backgroundImage = `url(${combFinish})`;
                array[k].style.transition = "0.1s";
            }
            array[k].style.height = L[i];
            array[k].style.width = L[i];
         
            i++;
            k++;
            
        }

        else{

            if((n1 + n2) === array.length) {
                ending();
            }else {
                console.log("else: " + n1, n2)
                array[k].style.backgroundImage = `url(${combFinish})`;
                array[k].style.transition = "0.1s";
            }
            array[k].style.height = M[j];
            array[k].style.width = M[j];
  
            j++;
            k++;
        }
    }

    while(i < n1){
        await wait(speed);
        if((n1 + n2) === array.length) {
            ending();
        }else {
        array[k].style.backgroundImage = `url(${combFinish})`;
        array[k].style.transition = "0.1s";
        }
        array[k].style.height = L[i];
        array[k].style.width = L[i];
    
        i++;
        k++;
    }

    while(j < n2){
        await wait(speed);

        if((n1 + n2) === array.length) {
            ending();
        }else {
            array[k].style.backgroundImage = `url(${combFinish})`;
            array[k].style.transition = "0.1s";
        }
        array[k].style.height = M[j];
        array[k].style.width = M[j];

        j++;
        k++;
    }
}

async function mergeSort(array, start, end) {
    if (start < end) {
        const middle = start + Math.floor((end - start) / 2);

        await mergeSort(array, start, middle);
        await mergeSort(array, middle + 1, end);
        await merge(array, start, middle, end);
    }
}

async function ending() {
    const combs = document.getElementsByClassName('combs');
    for (let i = 0; i < combs.length; i++) {
        await wait(speed);
        combs[i].style.backgroundImage = `url(${combFinish})`;
    }

    for (let i = 0; i < combs.length; i++) {
        combs[i].style.opacity = "0";
        combs[i].style.transition = "0.8s";
        await wait(10);     
    }
    await wait(1600);

    const doneDiv = document.getElementById("doneDiv");
    doneDiv.style.display = "flex";

    await wait(1500);

    var againButton = document.getElementById("againButton");
    againButton.style.display = "block";

    var backButton = document.getElementById("backButton");
    backButton.style.display = "block";

    var title = document.getElementById("mergeTitle");
    title.style.opacity = "1";
}

function settingExplonationDivs() {
    var mergeBody = document.getElementById("mergeBody");
    mergeBody.style.background = "#3E07DA";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var mergeExpButtonDiv = document.getElementById("mergeExpButtonDiv");
    mergeExpButtonDiv.style.display = "flex";
    mergeExpButtonDiv.style.top = "82%";
    mergeExpButtonDiv.style.left = "40%";

    var mergeDiv = document.getElementById("mergeDiv");
    mergeDiv.style.paddingTop = "260px";

    var setter = document.querySelector("#mergeSetterBtn");
    setter.style.display = "flex";

    var mergeSetterbox = document.querySelector(".mergeSetterbox");
    mergeSetterbox.style.right = "8%";

    var mergeSetter = document.querySelector(".mergeSetter");
    mergeSetter.style.width = "22%";
    mergeSetter.style.right = "6%";

    var mergeNumber = document.getElementById("mergeSet2");
    mergeNumber.style.display = "none";

    var mergeSpeed = document.getElementById("mergeSet1");
    mergeSpeed.style.marginLeft = "110px";

    var backButton = document.getElementById("backButton");
    backButton.style.display = "flex";

    var backBtnDiv= document.getElementById("backBtnDiv");
    backBtnDiv.style.top = "85%";
    backBtnDiv.style.right = "87.5%";

    var mergeExpImages= document.getElementById("mergeExpImages");
    mergeExpImages.style.display = "flex";

    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #fff";
}

function textAppear(text) {
    text.style.opacity = "1";
    text.style.transition = "0.5s";
}

function textDisappear(text) {
    text.style.opacity = "0";
    text.style.transition = "0.5s";
}

async function expMerge(array, start, middle, end){
    const n1 = middle - start + 1;
    const n2 = end - middle;
    let L = [n1];
    let M = [n2];

    for(let i = 0; i < n1; i++){
        await wait(speed);

        // color
        array[start + i].style.backgroundImage = `url(${combCompare1})`;
        array[start + i].style.transition = "0.1s";
        L[i] = array[start + i].style.height;
    }

    for(let j = 0; j < n2; j++){
        await wait(speed);

        // color
        array[middle + 1 + j].style.backgroundImage = `url(${combCompare2})`;
        array[middle + 1 + j].style.transition = "0.1s";
        M[j] = array[middle + 1 + j].style.height;
    }
    await wait(speed);

    let i = 0;
    let j = 0;
    let k = start;

    while(i < n1 && j < n2){
        await wait(speed);

        // To add color for which two r being compared for merging    
        if(parseInt(L[i]) <= parseInt(M[j])){
            // color
            if((n1 + n2) === array.length) {
                expEnding();
            }else {
                array[k].style.backgroundImage = `url(${combFinish})`;
                array[k].style.transition = "0.1s";
            }

            array[k].style.height = L[i];
            array[k].style.width = L[i];
         
            i++;
            k++;
            
        }
        else{
            // color
            if((n1 + n2) === array.length) {
                expEnding();
            }else {
                array[k].style.backgroundImage = `url(${combFinish})`;
                array[k].style.transition = "0.1s";
            }

            array[k].style.height = M[j];
            array[k].style.width = M[j];
  
            j++;
            k++;
        }
    }

    while(i < n1){
        console.log("When we run out of elements in either L or M, pick up the remaining elements and put in the original array");
        await wait(speed);
        // color
        if((n1 + n2) === array.length) {
            expEnding();
        }else {
        //array[k].style.background = 'lightgreen';
        array[k].style.backgroundImage = `url(${combFinish})`;
        array[k].style.transition = "0.1s";
        }
        array[k].style.height = L[i];
        array[k].style.width = L[i];
    
        i++;
        k++;
    }

    while(j < n2){
        await wait(speed);
        // color
        if((n1 + n2) === array.length) {
            expEnding();
        }else {
            //array[k].style.background = 'lightgreen';
            array[k].style.backgroundImage = `url(${combFinish})`;
            array[k].style.transition = "0.1s";
        }
        array[k].style.height = M[j];
        array[k].style.width = M[j];

        j++;
        k++;
    }
}

async function expEnding() {
    const combs = document.getElementsByClassName('combs');
    for (let i = 0; i < combs.length; i++) {
        await wait(speed);
        combs[i].style.backgroundImage = `url(${combFinish})`;
    }
    var mergeEnd = document.getElementById("end");
    textAppear(mergeEnd);
}

function buttonsOff() {
    var title = document.getElementById("mergeTitle");
    title.style.opacity = "0";

    var mergeSetter = document.querySelector(".mergeSetter");
    mergeSetter.style.width = "22%";

    var mergeNumber = document.getElementById("mergeSet2");
    mergeNumber.style.display = "none";

    var mergeSpeed = document.getElementById("mergeSet1");
    mergeSpeed.style.marginLeft = "110px";

    var startButton = document.getElementById("startButton");
    startButton.style.display = "none";

    var againButton = document.getElementById("againButton");
    againButton.style.display = "none";

    var backButton = document.getElementById("backButton");
    backButton.style.display = "none";
}
