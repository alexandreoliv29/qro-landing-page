import './App.css'
import { Feedback } from './components/Feedback/Feedback'
import { Header } from './components/Header/Header'
import { Management } from './components/Management/Management'
import { Powerful } from './components/Powerful/Powerful'

function App() {

  return (
    <>
      <Header />
      <Management />
      <Powerful />
      <Feedback />
    </>
  )
}

export default App
