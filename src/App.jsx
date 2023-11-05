import React, { useState, useEffect } from 'react';
import WelcomePage from './components/welcome/welcome'; // Import WelcomePage from the components/welcome subfolder
import Header from './components/header/Header'; // Import Header from the components/header subfolder
import Nav from './components/nav/Nav'; // Import Nav from the components/nav subfolder
import About from './components/about/About'; // Import About from the components/about subfolder

import Movies from './components/movies/movies'; // Adjust the path as necessary

import Contact from './components/contact/Contact'; // Import Contact from the components/contact subfolder
import Footer from './components/footer/Footer'; // Import Footer from the components/footer subfolder

// ... the rest of your App component ...


const App = () => {
  // State to control the visibility of the welcome page
  const [loading, setLoading] = useState(true);

  // Effect to hide the welcome page after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Set this to however long you want the welcome message to show

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // If loading is true, render the WelcomePage, else render the main content
  return (
    <>
      {loading ? (
        <WelcomePage />
      ) : (
        <>
          <Header />
          <Nav />
          <About />
          <Movies />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
