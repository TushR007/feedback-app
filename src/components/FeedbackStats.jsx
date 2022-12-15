import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext'

function FeedbackStats() {

  const { feedback } = useContext(FeedBackContext)

  let avg = feedback.reduce((prev,cur) => prev + cur.rating, 0 ) / feedback.length //To calculate average
  avg = Number.isInteger(avg)? avg : avg.toFixed(1); //To round of to 1 decimal place

  return (
    <div className='feedback-stats'>
        <h4>{ feedback.length } reviews</h4>
        <h4>Average Rating: {isNaN(avg) ? 0:avg }</h4>
    </div>
  )
}


export default FeedbackStats