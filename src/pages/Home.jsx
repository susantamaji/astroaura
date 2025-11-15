import React from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ServicesSection from "../components/ServicesSection";
import Circle from "../components/Circle";
import Scope from "../components/Scope";
import Path from "../components/Path";
import TestimonialSlider from "../components/TestimonialSlider";
import Question from "../components/Question";
import Form from "../components/Form";
import BlogList from "../components/BlogList";

export default function Home() {
  return (
    <>
      <Hero />
       <FeatureSection />
       <ServicesSection />
        <Circle />
        <Scope />
        <Path />
        <TestimonialSlider />
        <Question /> 
        <Form />
        <BlogList />
    </>
  );
}
