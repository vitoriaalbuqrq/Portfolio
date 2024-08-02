import './ContactMe.css'
import ContactForm from './ContactForm/ContactForm'
import ContactInfo from './ContactInfo/ContactInfo'
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'

const ContactMe = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}

      className="contact-wrapper" id="contactme">
      <h5>Contatos</h5>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left">
            <ContactInfo />
          </div>
          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactMe