// import logo from './logo.svg';
// import './App.css';
import Login from './entry/login';
import Navbar from './nav/navbar';
import Orders from './orders/orders';
import Products from './products/products';
function App() {
  return (
    <div  className="App" >

      {/* <Login/> */}
      <Navbar/>

      {/* <Products/> */}

      <Orders/>
      
    </div>
  );
}

export default App;
