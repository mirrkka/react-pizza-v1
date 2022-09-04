import Header from './components/Header'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Cart from './pages/Cart';
import { useEffect } from 'react';
import axios from 'axios'
import {fetchPizzas, setPizzas} from './redux/actions/pizzas'
import {useDispatch} from 'react-redux'


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchPizzas())

  }, [])

  


  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
