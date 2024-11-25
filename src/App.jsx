import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Header />
      <Summary />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
