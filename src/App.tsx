import './App.css'
import { Feedback } from './components/Feedback/Feedback'
import { Footer } from './components/Footer/Footer'
import { FreeText } from './components/FreeTest/FreeTest'
import { Header } from './components/Header/Header'
import { Management } from './components/Management/Management'

function App() {

  return (
    <>
      <Header />
      <Management />
      <FreeText />
      {/* <Powerful /> */}
      <Feedback />
      <Footer />
    </>
  )
}

export default App
