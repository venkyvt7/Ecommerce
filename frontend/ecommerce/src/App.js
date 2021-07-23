// import logo from './logo.svg';
// import './App.css';
import Login from './components/entry/login';
import Navbar from './components/nav/navbar';
import Orders from './components/orders/orders';
import Products from './components/products/products';
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
