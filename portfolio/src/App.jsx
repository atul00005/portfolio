import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skill.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    <Navbar/>
    <Home />
    <About />
    <Skills />
    <Service />
    <Contact />
    <Footer />
    </>
  )
}

export default App
