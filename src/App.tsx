import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { About } from './pages/About';
import { NoPage } from './pages/NoPage';
import { CharacterInfo } from './pages/CharacterInfo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path='characters' element={<Characters />} />
          <Route path='characters/:id' element={<CharacterInfo />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
