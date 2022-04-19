import { Routes, Route } from "react-router-dom"
import Home from './Home'
import BubbleSort from './BubbleSort.jsx';
import QuickSort from './QuickSort.jsx';
import MergeSort from './MergeSort.jsx';
import InsertionSort from './InsertionSort';
import CountingSort from "./CountingSort";
import BucketSort from "./BucketSort";
import './components/stylesheets/Fonts/Fonts.css';

function App() {
    return (
        <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/bubbleSort" element={ <BubbleSort/> } />
          <Route path="/quickSort"element={ <QuickSort/> } />
          <Route path="/mergeSort" element={ <MergeSort/> } />
          <Route path="/insertionSort" element={ <InsertionSort/> } />
          <Route path="/countingSort" element={ <CountingSort/> } />
          <Route path="/bucketSort" element={ <BucketSort/> } />
        </Routes>
      </div>
    )
  }

  export default App;