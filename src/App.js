import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/experiences" element={<Experiences />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
    </div>
  )
}

export default App;
