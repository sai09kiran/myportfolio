
import './App.css';
import Contactme from './Componente/Contactme/Contactme';
import Footer from './Componente/Footer/Footer';
import Hero from './Componente/Hero/Hero';

import Navbar from './Componente/Navbar/Navbar';
import Skils from './Componente/Skills/Skils';
import WorkExperience from './Componente/WorkExperience/WorkExperience';



function App() {
  return (
    <>
    
    <Navbar/>
    
    <div className="container">
      <Hero/>
      <Skils/>
      <WorkExperience/>
      <Contactme/>
    </div>
    <Footer/>
    
    
    </>
  );
}

export default App;
