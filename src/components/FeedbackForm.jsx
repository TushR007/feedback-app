import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {

    const [text,setText] = useState('')
    const [btnDisabled,setbtnDisabled] = useState(true)
    const [message,setMessage] = useState('')

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

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
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