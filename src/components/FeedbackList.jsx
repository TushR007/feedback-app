import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import { useContext } from 'react';
import FeedBackContext from '../context/FeedBackContext';
import Spinner from './shared/spinner'

function FeedbackList({ handleDelete }) {

  const { feedback, isLoading } = useContext(FeedBackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback available</p>;
  }

  return isLoading ?  <Spinner /> : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
            <motion.div key ={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <FeedbackItem key={item.id} item={item} />
            </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

}



export default FeedbackList;
