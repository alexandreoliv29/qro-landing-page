import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import { LandingPage } from "./components/LandingPage/LadingPage";
import { BlogPage } from "./components/BlogPage/BlogPage";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
