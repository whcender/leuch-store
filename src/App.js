import './App.scss';
import Page404 from './components/page404';
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Post from './pages/PostPage';
import Buy from './pages/BuyPage';

function App() {
  
  return (
    <>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>

    </>
  )
};





export default App;
