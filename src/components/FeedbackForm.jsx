import { useState,useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext'

function FeedbackForm() {

    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setbtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const { addFeedback,feedbackEdit,updateFeedBack } = useContext(FeedBackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleChange = (e) => {

        if(text === ''){
            setbtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <=10 ){
            setbtnDisabled(true)
            setMessage('Your review should contain atleast 10 characters ')
        } else {
            setbtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if(text.trim().length > 10){
            const newFeedback = { rating,text }

            if(feedbackEdit.edit === true){
                updateFeedBack(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback)
            }

            setText('')
        } 
        // Validate again because there are certain vulnerabilities on the client-side by using inspect element and such

    }

  return (
    <Card>
        <form onSubmit={ handleSubmit }>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(val) => setRating(val)}/>
            <div className="input-group">
                <input type="text" onChange={ handleChange } placeholder="Give us your feedback" value = {text}/>
                <Button type="submit" isDisabled={btnDisabled}>Add</Button>
            </div>

            { message && <div className="message">{ message }</div> }

        </form>
    </Card>
  )
}

export default FeedbackForm