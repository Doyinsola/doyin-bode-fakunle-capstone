import './App.scss';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContentDetails from './pages/ContentDetails/ContentDetails';
import CategoryContent from './pages/CategoryContent/CategoryContent';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import { useEffect, useState } from 'react';

function App() {
  const [isLogggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token") !== null) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}
          />
          <Route path='categories/:id' element={<CategoryContent />}
          />
          <Route path='categories/category' element={<CategoryContent />}
          />
          <Route path='/content/:id' element={<ContentDetails />}
          />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/user/profile' element={isLogggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path='*' element={<NotFound />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
