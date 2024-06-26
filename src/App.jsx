import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContentDetails from './pages/ContentDetails/ContentDetails';
import CategoryContent from './pages/CategoryContent/CategoryContent';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
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
          <Route path='*' element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
