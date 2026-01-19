import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container">
            <p className="footer__text">
              © 2026 Emirhan Aydın. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
