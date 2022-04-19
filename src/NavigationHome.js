import { Link } from "react-router-dom";
import "./components/stylesheets/NavigationHome/NavigationHome.css";

const NavigationHome = () => {
  return (
    <div><nav className='navigationHome'>
    <ul>
      <li>
        <Link to="/bubbleSort" id="link" className='link1'>Bubble sort</Link>
      </li>
      <li>
        <Link to="/quickSort" id="link" className='link2'>Quick sort</Link>
      </li>
      <li>
        <Link to="/mergeSort" id="link" className='link3'>Merge sort</Link>
      </li>
      <li>
        <Link to="/insertionSort" id="link" className='link4'>Insertion sort</Link>
      </li>
      <li>
        <Link to="/countingSort" id="link" className='link5'>Counting sort</Link>
      </li>
      <li>
        <Link to="/bucketSort" id="link" className='link6'>Bucket sort</Link>
      </li>
    </ul>
  </nav></div>
  )
}

export default NavigationHome