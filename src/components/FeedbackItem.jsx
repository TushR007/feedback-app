import { FaTimes,FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext'

function FeedbackItem({ item }) {

  const { deleteFeedback } = useContext(FeedBackContext)
  const { editFeedback } = useContext(FeedBackContext)

  return (


    <Card>
        <div className="num-display">
            {item.rating}
        </div>
        <button onClick = {() => deleteFeedback(item.id)} className="close">
          <FaTimes color='231942'/>
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color='231942' />
        </button>
        <div className="text-display">
            {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem