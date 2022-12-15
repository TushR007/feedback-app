import Header from "./components/Header";
import FeedBackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Aboutpage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { FeedBackProvider } from './context/FeedBackContext'

function App() {

  return (
    <FeedBackProvider>
      <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element = {
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedBackList />
            </>
          }>
            
          </Route>

          <Route path='/about' element={<Aboutpage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
    </FeedBackProvider>
    
  );
}

export default App;
