import { createContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {

    const [feedback,setFeedback] = useState([])

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you wanna delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuid4(); // To generate random id
        setFeedback([newFeedback, ...feedback]); // use spread operator
    };

    //For editing UI wise
    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedBack = (id,updItem) => {
        setFeedback(feedback.map((item) => (
             item.id === id ? updItem:item
        )))
        console.log(feedback)
    }

    return <FeedBackContext.Provider value ={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedBack
    }}>
        { children }
    </FeedBackContext.Provider>
}

export default FeedBackContext