import FeedbackData from './data/FeedbackData';
import {useState} from 'react'
import Header from "./components/Header";
import FeedBackList from "./components/FeedbackList";

function App() {
  const [feedback,setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure?")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} handleDelete={ deleteFeedback } />
      </div>
    </>
  );
}

export default App;
