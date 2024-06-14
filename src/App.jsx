import { BrowserRouter, Routes,Route} from 'react-router-dom';

import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

import './App.css'


const App = () => {
 
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>

)
}
export default App;