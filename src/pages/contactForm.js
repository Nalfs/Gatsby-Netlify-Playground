import React, { Component } from "react";
import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/Footer'

class ContactForm extends Component {
    render() {

      return (
        <div>
        <Header />
          <h1>View Form</h1>
          <Contact />
          <Footer />
        </div>
      )
    }
  }
  export default ContactForm;

