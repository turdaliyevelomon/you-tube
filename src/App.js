import './App.css';
import Home from './components/home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewPage from './components/channel/NewPage.jsx'

function App() {
 
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newPage" element={<NewPage />} />
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
