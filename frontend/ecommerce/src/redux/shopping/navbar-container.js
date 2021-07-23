import  {connect} from 'react-redux';
import  {addToCart} from './shopping-action';
import Navbar from '../../components/nav/navbar.js'
// import Products  from '../../components/products/products';
const mapStateToProps=state=>({

    // {console.log(state);
    // }
  data:state
})


const mapDispatchToProps=dispatch=>({

    addToCartHandler:data=>dispatch(addToCart(data))


})




export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
