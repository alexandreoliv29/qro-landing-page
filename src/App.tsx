import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import { LandingPage } from "./components/LandingPage/LadingPage";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
