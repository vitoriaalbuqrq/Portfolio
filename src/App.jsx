import 'material-symbols';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Experiences from './components/Experiences/Experiences';
import Services from './components/ServicesSkills/Services';

function App() {

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container">
        <Hero />
        <Services />
        <Experiences />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App
