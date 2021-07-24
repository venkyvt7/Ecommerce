// import logo from './logo.svg';
// import './App.css';
import Login from './components/entry/login';
// import Navbar from './components/nav/navbar';
import Orders from './components/orders/orders';
import Products from './components/products/products';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import HomeContainer from './redux/shopping/shopping-conatiner';
import NavbarContainer from './redux/shopping/navbar-container';
import CartContainer from './redux/shopping/cart-container';
function App() {
  return (
    <div  className="App" >

<NavbarContainer/>
{/* <Navbar/> */}

{/* <HomeContainer/> */}
      {/* <Login/> */}

      {/* <CartContainer/> */}
      <Router>
          
            <Switch>
           
              {/* <Route exact path='/cart' component={CartContainer}></Route> */}
              <Route exact path='/shop' component={HomeContainer}></Route>
            </Switch>
         
       </Router>

      {/* <Products/> */}

      {/* <Orders/> */}
      {/* </HomeContainer> */}
    </div>
  );
}

export default App;
