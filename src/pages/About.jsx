import React from 'react'
import AboutHeader from "../components/AboutHeader";
import AboutCard from "../components/AboutCard";
import AboutCircle from "../components/AboutCircle";
import AboutTestimonials from "../components/AboutTestimonials";
import Faqabout from "../components/Faqabout";
import BlogAbout from "../components/BlogAbout";
function About() {
  return (
    <div>
      <AboutHeader />
       <AboutCard />
         <AboutCircle />
         <AboutTestimonials />
         <Faqabout />
         <BlogAbout />
    </div>
  )
}

export default About