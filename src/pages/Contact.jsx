import React from 'react'
import HeadContact from "../components/HeadContact";
import ContactForm from "../components/ContactForm";
import Support from "../components/Support";
import Map from "../components/Map";

function Contact() {
  return (
    <div>
      <HeadContact />
      <ContactForm/>
      <Support />
      <Map />
    </div>
  )
}

export default Contact;