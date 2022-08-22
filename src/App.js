import Header from './components/Header'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';

function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((res) => res.json())
    .then((json) => {
      setPizzas(json.pizzas)
    })

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
