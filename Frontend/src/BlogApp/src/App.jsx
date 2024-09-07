import Hero from './components/Hero'
import NavBar from './components/NavBar'
import {Route, BrowserRouter as Router , Routes  } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import NewComponent from './components/NewComponent'
import CreateBlog from './components/CreateBlog'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<NewComponent/>}/>
       <Route path='/Login' element={<Login/>} />
       <Route path='/SignUp' element={<SignUp/>}/>
       <Route path='/createBlog' element={<CreateBlog/>}/>
      </Routes> 
    </Router>
    </>
  )
}

export default App
