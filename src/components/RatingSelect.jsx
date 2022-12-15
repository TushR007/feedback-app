import { useState,useContext, useEffect } from 'react'
import FeedBackContext from '../context/FeedBackContext'

function RatingSelect({ select }) {

    const { feedbackEdit } = useContext(FeedBackContext)

    const [selected,setSelected] = useState(10)

    const ratings = [1,2,3,4,5,6,7,8,9,10]

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    
    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

  return (
    <ul className='rating'>
        {ratings.map((element) => (
            <li key={element}>
                <input 
                    type= 'radio'
                    id = {`num${element}`}
                    name='rating'
                    value={element}
                    onChange={handleChange}
                    checked = {selected === element}
                />

                <label htmlFor={`num${element}`}> {element} </label>
            </li>
        ))}
    </ul>
  )
}

export default RatingSelect