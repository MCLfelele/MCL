"use client";
import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import Gallery from './components/Gallery/index';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import ReactDOM from "react-dom/client";





export default function Home() {


  return (

    <main>
        
        <Banner />
        <Courses />
        <Mentor />
        <Gallery />
        <Newsletter />

        
         
        
        

      </main>


      
      
    
  )
}
