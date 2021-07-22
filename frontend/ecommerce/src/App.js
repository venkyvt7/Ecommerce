// import logo from './logo.svg';
// import './App.css';
import Login from './entry/login';
import Navbar from './nav/navbar';
import Products from './products/products';
function App() {
  return (
    <div  className="App" >

      {/* <Login/> */}
      <Navbar/>

      <Products/>
    </div>
  );
}

export default App;
