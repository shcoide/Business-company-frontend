import React,{useEffect} from 'react';
import Details from './details.jsx';
import Enquiry from './enquiry.jsx';
import Footer from '../../components/footer/footer.jsx';
import './contact.css';

function Contact() {
  useEffect(() => {
    const screenHeight = window.innerHeight;
    const desiredScrollPosition = screenHeight * 0; // Adjust the multiplier as needed

    // Scroll to the calculated position
    window.scrollTo({
      top: desiredScrollPosition,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="contact-body">
        <Details/>
        <Enquiry/>
        <Footer/>
    </div>
  );
}

export default Contact;