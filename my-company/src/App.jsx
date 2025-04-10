import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar' 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import './App.css'

function App() {
  
  return (
    <>
      
  <Router>
            
  <Navbar />
<Routes>
  <Route path= "/" element ={<Home />} />
  <Route path= "services" element = { <Services />} />
  <Route path= "contact" element = {<Contact />} />
  <Route path= "about" element = {<About />} />
</Routes>

</Router>
     
     
    </>
  )
}

export default App
