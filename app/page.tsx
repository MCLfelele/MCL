import React from 'react';
import Banner from './components/Banner';
import Courses from './components/Courses';
import Mentor from './components/Mentor';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Gallery from './components/Gallery';

function Home() {
  return (
    <main>
      <Banner />
      <Courses />
      <Mentor />
      <Gallery />
      <Newsletter />
      {/* Add any other components or content here */}
    </main>
  );
}

export default Home;
