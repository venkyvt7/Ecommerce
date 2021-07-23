// import logo from './logo.svg';
// import './App.css';
import Login from './components/entry/login';
import Navbar from './components/nav/navbar';
import Orders from './components/orders/orders';
import Products from './components/products/products';


import HomeContainer from './redux/shopping/shopping-conatiner';


function App() {
  return (
    <div  className="App" >
<HomeContainer>
      {/* <Login/> */}
      <Navbar/>

      <Products/>

      {/* <Orders/> */}
      </HomeContainer>
    </div>
  );
}

export default App;
