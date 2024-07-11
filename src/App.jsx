import 'material-symbols';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App
