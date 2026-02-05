import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage  from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import CoursePage from './pages/CoursePage';
 import PagesPage from './pages/PagesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Register from './pages/Register';
import Login from './pages/Login';

 
function App() {
  return (
<>

<Routes>
   <Route path="/" element={<LandingPage/>} />
  <Route path='/about'  element={<AboutPage/>}/>
   <Route path="/courses" element={<CoursePage />} />
    <Route path="/pages" element={<PagesPage />} />
     <Route path="/blogs" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
</Routes>
</>
  )
}
 
export default App