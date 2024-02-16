import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Projects from './components/Projects'
import './App.scss'
//import Particles from './components/Backgrounds/Particles';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Route>
      </Routes>
    {/*<Particles id="tsparticles" /> */} 
    </>
  )
}

export default App