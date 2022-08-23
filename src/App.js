import Header from './components/Header'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => setPizzas(data.pizzas))

  }, [])

  console.log(pizzas)


  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={pizzas}/>} exact/>
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
