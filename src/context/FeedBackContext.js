import { createContext, useState,useEffect } from "react";

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {

    const [isloading,setIsLoading] = useState(true)
    const [feedback,setFeedback] = useState([])

    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you wanna delete?")) {
            await fetch(`/feedback/${id}`,{ method: 'DELETE' })

            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = async (newFeedback) => {

        const response = await fetch('/feedback',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([data, ...feedback]); // use spread operator
    };

    //For editing UI wise
    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    })



    useEffect(() => {
        fetchFeedback()
    },[])

    const fetchFeedback = async () =>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`)

        const data = await response.json()

        setFeedback(data)

        setIsLoading(false)
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedBack = async(id,updItem) => {

        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => (
             item.id === id ? data:item
        )))
    }

    return <FeedBackContext.Provider value ={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedBack,
        isloading
    }}>
        { children }
    </FeedBackContext.Provider>
}

export default FeedBackContext