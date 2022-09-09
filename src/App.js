import Header from './components/Header'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Cart from './pages/Cart';


function App() {
  
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
