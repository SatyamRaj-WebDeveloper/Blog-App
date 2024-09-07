import Hero from './components/Hero'
import NavBar from './components/NavBar'
import {BrowserRouter as Router , Routes  } from 'react-router-dom'
import SignUp from './components/SignUp'

function App() {
  
  return (
    <>
    <Router>
      <NavBar/>
       <Hero/>
       <SignUp/>
    </Router>
    </>
  )
}

export default App
