import './components/stylesheets/HomeBottom/HomeBottom.css'
import HomeBottomBoxes from './HomeBottomBoxes'
const HomeBottom = () => {


    return (

        <div className='thirdPage' id="thirdPage">
                <h1 id="letseeTxt">let's see...</h1>
                <h1 id="havehereTxt">what we have here?</h1>
                <HomeBottomBoxes link="/bubbleSort" id="bubbleBox" text="Bubble"/>
                <HomeBottomBoxes  link="/quickSort" id="quickBox" text="Quick"/>
                <HomeBottomBoxes  link="/mergeSort" id="mergeBox" text="Merge"/>
                <HomeBottomBoxes  link="/insertionSort" id="insertionBox" text="Insertion"/>
                <HomeBottomBoxes  link="/countingSort" id="countingBox" text="Counting"/>
                <HomeBottomBoxes  link="/bucketSort" id="bucketBox" text="Bucket"/>

                <div id="boxContainer">
                    <div id="row1">
                        <HomeBottomBoxes link="/bubbleSort" id="bubbleBox2" text="Bubble"/>
                        <HomeBottomBoxes  link="/quickSort" id="quickBox2" text="Quick"/>
                        <HomeBottomBoxes  link="/mergeSort" id="mergeBox2" text="Merge"/>
                    </div>

                    <div id="row2">
                        <HomeBottomBoxes  link="/insertionSort" id="insertionBox2" text="Insertion"/>
                        <HomeBottomBoxes  link="/countingSort" id="countingBox2" text="Counting"/>
                        <HomeBottomBoxes  link="/bucketSort" id="bucketBox2" text="Bucket"/>
                    </div>
                </div>
        </div>
    )
}
export default HomeBottom
