import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedBackItem'

function FeedbackList({ feedback }) {

    if(!feedback || feedback.length === 0){
        return <p>No FeedBack Yet</p>
    }
  return (
    <div className="feedback-list">
        {
            feedback.map((item) =>(
                <FeedbackItem key = {item.id} item={item} handleDelete = {(id) => console.log(id)}/>
            ) )
        }
    </div>
  )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            item:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList