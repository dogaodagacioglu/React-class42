import './App.css';
import { HomePage } from './components/HomePage';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductDetails } from './components/ProductDetails';
import { Favorites } from './components/Favorites';

function App() {
  return (
    <GlobalProvider className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;