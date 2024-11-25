import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <Header />
      <Experience />
      <Skills />
    </div>
  );
};

export default App;
