import './App.css'
import { Header } from './components/Header/Header'

function App() {

  return (
    <div className="App" style={{ background: 'url("https://qria-tech.s3.amazonaws.com/BackgroundOrange.svg")' }}>
      <div className='container'>
        <Header />
      </div>
    </div>
  )
}

export default App
