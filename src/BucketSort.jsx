import Navigation from "./Navigation";
import './components/stylesheets/BucketSort/BucketSort.css'
import { Component } from "react/cjs/react.production.min";
import BucketBcSorted from "./components/stylesheets/Graphics/bucketSort/paperBucket.png"
import Cursor from './Cursor';
import Picker from "./Picker";
import BucketSetter from "./BucketSetter";

var elementNum = 10;
var speed = 2000;

export default class BucketSort extends Component{
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
        const array = [4, 2, 7, 8, 9, 5, 10, 17];
        this.setState({array});
        settingExplonationDivs();

        const outerArrayDiv = document.getElementById("outerArrayDiv");
        outerArrayDiv.style.paddingTop = "20%";
    }

    async doExplain() {
    
        var bExpStartBtn = document.getElementById("bExpStartBtn");
        bExpStartBtn.style.display = "none";

        var backButton = document.getElementById("bBackBtn");
        backButton.style.display = "none";

        const fill = document.getElementById("fill");
        const sorting = document.getElementById("sorting");
        const collect = document.getElementById("collect");
        const end = document.getElementById("bEnd");
        const bucket = document.getElementsByClassName('bucket');
        const output = document.getElementsByClassName('output');
        const arrayDiv = document.getElementById("arrayDiv");
        const origiArray = document.getElementsByClassName('array');
        var bucketBody = document.getElementById("bucketBody");
        const outerArrayDiv = document.getElementById("outerArrayDiv");
        const array = [];

        const bucketsDiv = document.createElement('div');
        bucketsDiv.id = "bucketsDiv";
        bucketBody.appendChild(bucketsDiv);

        const bucketNumbers= document.createElement('div');
        bucketNumbers.id = "bucketNumbers";
        bucketBody.appendChild(bucketNumbers);

        const outputDiv = document.createElement('div');
        outputDiv.id = "outputDiv";
        bucketBody.appendChild(outputDiv);


        for (let i = 0; i < origiArray.length; i++) {
            array[i] = parseInt(origiArray[i].innerText);
           
       }

       // Declaring variables
       var i,
       minValue = array[0],
       maxValue = array[0],
       bucketSize = bucketSize || 5;

       // Setting min and max values
       array.forEach(function (currentVal) {
           if (currentVal < minValue) {
               minValue = currentVal;
           } else if (currentVal > maxValue) {
               maxValue = currentVal;
           }
       })

       await wait(speed / 2);

   
       //Editing original array's style
       arrayDiv.style.opacity = "0";
       arrayDiv.style.transition = "0.7s";
       await wait(speed);

       arrayDiv.style.width = "50%";
       arrayDiv.style.left = "25%";
       arrayDiv.style.top = "15%";
       outerArrayDiv.style.paddingTop = "7%";
       arrayDiv.style.color = "#8D8B8C";
       for (let i = 0; i < array.length; i++) {
           origiArray[i].style.fontSize = "400%";    
       }
       arrayDiv.style.border = "1px solid #8D8B8C";

       await wait(speed / 2);

       arrayDiv.style.opacity = "1";
       arrayDiv.style.transition = "0.7s";

       await wait(speed);

       textAppear(fill);

       await wait(speed);

       var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; //number of buckets
       var allBuckets = new Array(bucketCount); //array with number of buckets

       for (i = 0; i < allBuckets.length; i++) {
         allBuckets[i] = []; //every element is an empty array
       }

       //Create bucket texts
       for (i = 0; i < allBuckets.length; i++) {
           const element = document.createElement('div');
           element.className = "bucketNumber";
           element.id = "bucketNumber" + i;
           element.innerText = "bucket #" + i;
           bucketNumbers.appendChild(element);
       }

       //Create bucket divs
       for(i = 0; i < bucketCount; i++) {
           const element = document.createElement('div');
           element.className = "bucket";
           element.id = "bucket" + i;
           bucketsDiv.appendChild(element);
       }

       await wait(speed);

       // Pushing values to buckets
       array.forEach(function (currentVal) {
           allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
       });


       for(i = 0; i < bucketCount; i++) {
           bucket[i].innerText = allBuckets[i];
           await wait (speed/2);
       }

       textDisappear(fill);

       await wait(speed / 4);

       //Create output
       for(i = 0; i < array.length; i++) {
        const element = document.createElement('div');
        element.className = "output";
        element.id = "output" + i;
        outputDiv.appendChild(element);
    }

       textAppear(sorting);

       await wait(speed / 4);

       array.length = 0;
        
       allBuckets.forEach(function(bucket) {
           insertionSort(bucket);
           bucket.forEach(function (element) {
               array.push(element)
           });
       });

       //Update the buckets
       for(i = 0; i < allBuckets.length; i++) {
           bucket[i].innerText = allBuckets[i];
           bucket[i].style.textShadow = "2px 2px 2px rgba(0,0,0,0.6)";
           bucket[i].style.color = "#02D195";
           bucket[i].style.backgroundImage = `url(${ BucketBcSorted })`;
           bucket[i].style.transition = "0.5s";
           await wait(speed/2);
       }

       await wait(speed);

       textDisappear(sorting);

       await wait(speed / 4);

       textAppear(collect);

       await wait(speed / 2);

       outputDiv.style.borderTop = "1px solid #FFBEF0";
       outputDiv.style.borderBottom = "1px solid #FFBEF0";

        for (let i = 0; i < array.length; i++) {
            output[i].innerText = array[i];
            await wait(speed/4);
        }

        await wait(speed);

        textDisappear(collect);

        arrayDiv.style.opacity = "0";
        bucketsDiv.remove();
        bucketNumbers.remove();
        await wait(speed / 4);
        outputDiv.style.top = "35%";
        outputDiv.style.transition = "0.7s";

        textAppear(end);
        await wait(speed);
        backButton.style.display = "block";
        await wait(speed);
        outputDiv.remove();
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
        console.log(speed);
    }

    speedMinus() {
        if(speed <= 200) {
            speed = 200;
        } else {
            speed += (-200);
        }
        console.log(speed);
    }

    createArray() {
        const array = [];
        const arrayDiv = document.getElementById("arrayDiv");
        arrayDiv.style.opacity = "1";
        arrayDiv.style.width = "100%";
        arrayDiv.style.top = "42%";
        arrayDiv.style.color = "#000";
        arrayDiv.style.border = "none";
        arrayDiv.style.left = "0";
        arrayDiv.style.transition = "0.5s";
        for (let i = 0; i < elementNum; i++) {
          array.push(randomNumbers(0, 30));
        }
        this.setState({array});
        settingDivs();
    }

    createAgain() {
        const array = [];
        const arrayDiv = document.getElementById("arrayDiv");
        const origiArray = document.getElementsByClassName('array');
        const outerArrayDiv = document.getElementById("outerArrayDiv");
        arrayDiv.style.opacity = "1";
        arrayDiv.style.color = "#000";
        arrayDiv.style.border = "none";
        arrayDiv.style.width = "100%";
        outerArrayDiv.style.paddingTop = "9%";
        arrayDiv.style.transition = "0.5s";
        for (let i = 0; i < elementNum; i++) {
            array.push(randomNumbers(0, 30));
            origiArray[i].style.fontSize = "600%";  
        }
        this.setState({array});
        var startButton = document.getElementById("bStartBtn");
        startButton.style.display = "block";

        const donediv = document.getElementById("bucketDoneDiv");
        donediv.style.display = "none";

        var againButton = document.getElementById("bAgainBtn");
        againButton.style.left = "50%";

        var bubSetter= document.querySelector(".bucketSetter");
        bubSetter.style.width = "20%";

        var bubNumber = document.getElementById("bucketSet2");
        bubNumber.style.display = "flex";

        var bucketSetterDiv = document.getElementById("bucketSetterDiv");
        bucketSetterDiv.style.marginRight = "30px";
    }

    stepBack() {
        const array = [];
        this.setState({array});
        settingDivsBack();
    }

    async doSort() {
        buttonsOff();

        const bucket = document.getElementsByClassName('bucket');
        const output = document.getElementsByClassName('output');
        const arrayDiv = document.getElementById("arrayDiv");
        const outerArrayDiv = document.getElementById("outerArrayDiv");
        const origiArray = document.getElementsByClassName('array');
        var bucketBody = document.getElementById("bucketBody");
        const array = [];


        const bucketsDiv = document.createElement('div');
        bucketsDiv.id = "bucketsDiv";
        bucketBody.appendChild(bucketsDiv);

        const bucketNumbers= document.createElement('div');
        bucketNumbers.id = "bucketNumbers";
        bucketBody.appendChild(bucketNumbers);

        const outputDiv = document.createElement('div');
        outputDiv.id = "outputDiv";
        bucketBody.appendChild(outputDiv);


        for (let i = 0; i < origiArray.length; i++) {
             array[i] = parseInt(origiArray[i].innerText);
            
        }

        // Declaring variables
        var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;

        // Setting min and max values
        array.forEach(function (currentVal) {
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                maxValue = currentVal;
            }
        })

        await wait(speed / 2);

    
        //Editing original array's style
        arrayDiv.style.opacity = "0";
        arrayDiv.style.transition = "0.7s";
        await wait(speed);

        switch(elementNum) {
            case 10:
                arrayDiv.style.width = "69%";
                break;
            case 9:
                arrayDiv.style.width = "59%";
                break;
            case 8: 
                arrayDiv.style.width = "57.5%";
                break;
            case 7:
                arrayDiv.style.width = "53%";
                break;
            case 6:
                arrayDiv.style.width = "46%";
                break;
            case 5:
                arrayDiv.style.width = "40%";
                break;
            case 4:
                arrayDiv.style.width = "32%";
                break;
            case 3:
                arrayDiv.style.width = "25%";
                break;
            default:
        }
        outerArrayDiv.style.padding = "0";
        outerArrayDiv.style.marginTop = "-5%";
        arrayDiv.style.color = "#8D8B8C";
        for (let i = 0; i < array.length; i++) {
            origiArray[i].style.fontSize = "400%";    
        }
        arrayDiv.style.border = "1px solid #8D8B8C";

        await wait(speed / 2);

        arrayDiv.style.opacity = "1";
        arrayDiv.style.transition = "0.7s";

        await wait(speed);

        // Initializing buckets
        var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1; //number of buckets
        var allBuckets = new Array(bucketCount); //array with number of buckets

        for (i = 0; i < allBuckets.length; i++) {
          allBuckets[i] = []; //every element is an empty array
        }

        //Create bucket texts
        for (i = 0; i < allBuckets.length; i++) {
            const element = document.createElement('div');
            element.className = "bucketNumber";
            element.id = "bucketNumber" + i;
            element.innerText = "bucket #" + i;
            bucketNumbers.appendChild(element);
        }

        //Create bucket divs
        for(i = 0; i < bucketCount; i++) {
            const element = document.createElement('div');
            element.className = "bucket";
            element.id = "bucket" + i;
            bucketsDiv.appendChild(element);
        }

        await wait(speed);

        // Pushing values to buckets
        array.forEach(function (currentVal) {
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
        });


        for(i = 0; i < bucketCount; i++) {
            bucket[i].innerText = allBuckets[i];
            await wait (speed/2);
        }

        //Create output div
        for(i = 0; i < array.length; i++) {
            const element = document.createElement('div');
            element.className = "output";
            element.id = "output" + i;
            outputDiv.appendChild(element);
        }
        
        await wait(speed);

        // Sorting buckets
        array.length = 0;
        
        allBuckets.forEach(function(bucket) {
            insertionSort(bucket);
            bucket.forEach(function (element) {
                array.push(element)
            });
        });

        //Update the buckets
        for(i = 0; i < allBuckets.length; i++) {
            bucket[i].innerText = allBuckets[i];
            bucket[i].style.textShadow = "2px 2px 2px rgba(0,0,0,0.6)";
            bucket[i].style.color = "#02D195";
            bucket[i].style.backgroundImage = `url(${ BucketBcSorted })`;
            bucket[i].style.transition = "0.5s";
            await wait(speed/2);
        }

        await wait(speed);

        outputDiv.style.borderTop = "1px solid #FFBEF0";
        outputDiv.style.borderBottom = "1px solid #FFBEF0";

        for (let i = 0; i < array.length; i++) {
            output[i].innerText = array[i];
            await wait(speed/4);
        }

        await wait(speed);

        arrayDiv.style.opacity = "0";
        outerArrayDiv.style.margin = "0";
        bucketsDiv.remove();
        bucketNumbers.remove();
        await wait(speed / 4);
        outputDiv.style.top = "35%";
        outputDiv.style.transition = "0.7s";
        await wait(speed);

        outputDiv.style.opacity = "0";
        outputDiv.style.transition = "0.7s";

        ending();

    }

    render () {
        const {array} = this.state;
        return (
        <div className='bucketSort' id="bucketBody">

            <Cursor />

            <div id="bucketDoneDiv">
                <p id="bucketDoneText">bucket sort done</p>
            </div>

            <BucketSetter 
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
                link6="/countingSort"
                text1="Home"
                text2="Bubble Sort"
                text3="Quick Sort"
                text4="Merge Sort"
                text5="Insertion Sort"
                text6="CountingSort"
            />

            <h1 id="bucketTitle">Bucket Sort</h1>


            <div id="bExplonationDiv">
                <h3 id="fill">We put the elements in buckets, based on what intervall they belong to.
                <br></br>We can calculate it by the value of the current, minimum and maximum values of the array.</h3>
                <h3 id="sorting">Then we use whatever sorting method we want to sort the buckets one by one.
                <br></br>Here, we use the insertion sort.</h3>
                <h3 id="collect">Finally, we just take out the elements and collect them into an output array.</h3>
                <h3 id="bEnd">Now we have sorted the whole array!</h3>
            </div>

            <div id="outerArrayDiv">
                <div className='arrayDiv' id="arrayDiv">
                {array.map((value, idx) => (
                    <div id="array" className='array'
                    key={idx}> { value }</div>
                ))}
                </div>
            </div>    

            <div id="bucketExpImages">
            </div>

                <button
                    id="bBackBtn"
                    onClick={this.stepBack}>
                    &lt;
                </button>
            
                <button
                    id="bStartBtn"
                    onClick={this.doSort}>
                    start
                </button>
                <button
                    id="bAgainBtn"
                    onClick={this.createAgain}>
                    again
                </button>

                <button
                    id="bExpStartBtn" onClick={this.doExplain}>
                    &gt;
                </button>

        </div>
        )
    }
}

function randomNumbers(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function insertionSort(array) {
    var size = array.length;
    
    for(var i = 1; i < size; i++) {
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
}

function settingDivs() {
    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var backButton = document.getElementById("bBackBtn");
    backButton.style.display = "flex";

    var startButton = document.getElementById("bStartBtn");
    startButton.style.display = "block";

    var againButton = document.getElementById("bAgainBtn");
    againButton.style.display = "block";
    againButton.style.left = "50%";

    var title = document.getElementById("bucketTitle");
    title.style.display = "flex";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var setterBtn = document.querySelector("#bucketSetterBtn");
    setterBtn.style.display = "flex";

    var setter = document.querySelector(".bucketSetter");
    setter.style.display = "block";
}

function settingDivsBack() {
    var startButton = document.getElementById("bStartBtn");
    startButton.style.display = "none";

    var againButton = document.getElementById("bAgainBtn");
    againButton.style.display = "none";

    var backBtn = document.getElementById("bBackBtn");
    backBtn.style.display = "none";

    var donediv = document.getElementById("bucketDoneDiv");
    donediv.style.display = "none";

    var title = document.getElementById("bucketTitle");
    title.style.display = "none";

    var bucketBody = document.getElementById("bucketBody");
    bucketBody.style.background = "#fffefa";

    var navi = document.querySelector(".navbar");
    navi.style.display = "flex";

    var setterBtn = document.querySelector("#bucketSetterBtn");
    setterBtn.style.display = "none";

    var setter = document.querySelector(".bucketSetter");
    setter.style.display = "none";

    var done = document.getElementById("bucketDoneDiv");
    done.style.opacity = "0";

    var bExplonationDiv= document.getElementById("bExplonationDiv");
    bExplonationDiv.style.display = "none";

    var picker = document.getElementById("picker");
    picker.style.display = "block";

    var cursor = document.getElementById("cursor");
    cursor.style.border = "3px solid #000";

    var bExpStartBtn = document.getElementById("bExpStartBtn");
    bExpStartBtn.style.display = "none";
} 

function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

async function ending() {
    await wait(1500);

    var outputDiv = document.getElementById("outputDiv");
    outputDiv.remove();

    const donediv = document.getElementById("bucketDoneDiv");
    donediv.style.display = "flex";

    await wait(1500);

    var againButton = document.getElementById("bAgainBtn");
    againButton.style.display = "block";
    againButton.style.left = "43%";

    var backButton = document.getElementById("bBackBtn");
    backButton.style.display = "block";

    var title = document.getElementById("bucketTitle");
    title.style.opacity = "1";
}

function settingExplonationDivs() {

    const arrayDiv = document.getElementById("arrayDiv");
    arrayDiv.style.opacity = "1";
    arrayDiv.style.width = "100%";
    arrayDiv.style.top = "40%";
    arrayDiv.style.color = "#000";
    arrayDiv.style.border = "none";
    arrayDiv.style.left = "0";
    arrayDiv.style.transition = "0.5s";

    var picker = document.getElementById("picker");
    picker.style.display = "none";

    var navi = document.querySelector(".navbar");
    navi.style.display = "none";

    var bExpStartBtn = document.getElementById("bExpStartBtn");
    bExpStartBtn.style.display = "flex";

    var setter = document.querySelector("#bucketSetterBtn");
    setter.style.display = "flex";

    var bubSetter= document.querySelector(".bucketSetter");
    bubSetter.style.width = "15%";

    var bubNumber = document.getElementById("bucketSet2");
    bubNumber.style.display = "none";
    
    var bucketSetterDiv = document.getElementById("bucketSetterDiv");
    bucketSetterDiv.style.marginRight = "0";

    var backButton = document.getElementById("bBackBtn");
    backButton.style.display = "flex";

    var bExplonationDiv= document.getElementById("bExplonationDiv");
    bExplonationDiv.style.display = "flex";

    const end = document.getElementById("bEnd");
    end.style.opacity = "0";

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
    var title = document.getElementById("bucketTitle");
    title.style.opacity = "0";

    var bubSetter= document.querySelector(".bucketSetter");
    bubSetter.style.width = "16%";

    var bubNumber = document.getElementById("bucketSet2");
    bubNumber.style.display = "none";

    var bucketSetterDiv = document.getElementById("bucketSetterDiv");
    bucketSetterDiv.style.marginRight = "0";

    var startButton = document.getElementById("bStartBtn");
    startButton.style.display = "none";

    var againButton = document.getElementById("bAgainBtn");
    againButton.style.display = "none";

    var backButton = document.getElementById("bBackBtn");
    backButton.style.display = "none";
}