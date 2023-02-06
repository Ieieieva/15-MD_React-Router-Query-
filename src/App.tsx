import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { About } from './pages/About';
import { NoPage } from './pages/NoPage';
import { CharacterInfo } from './pages/CharacterInfo';

function App() {
  // let { params } = useParams();
  // console.log('params' + params)

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
