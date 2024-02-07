import './App.css'
import { Blog } from './components/Blog/Blog'
import { Feedback } from './components/Feedback/Feedback'
import { Footer } from './components/Footer/Footer'
import { FreeText } from './components/FreeTest/FreeTest'
import { Header } from './components/Header/Header'
import { Management } from './components/Management/Management'
import { PlayNow } from './components/PlayNow/PlayNow'
import { Prices } from './components/Prices/Prices'

function App() {

  return (
    <>
      <Header />
      <Management />
      <FreeText />
      {/* <Powerful /> */}
      <Feedback />
      <Prices />
      <PlayNow />
      <Blog />
      <Footer />
    </>
  )
}

export default App
