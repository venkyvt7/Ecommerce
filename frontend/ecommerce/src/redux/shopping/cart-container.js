import  {connect} from 'react-redux';
import  {addToCart} from './shopping-action';

import Cart from '../../components/cart/cart';
// import Products  from '../../components/products/products';
const mapStateToProps=state=>({

    // {console.log(state);
    // }
  data:state
})


const mapDispatchToProps=dispatch=>({

    addToCartHandler:data=>dispatch(addToCart(data))


});




export default connect(mapStateToProps,mapDispatchToProps)(Cart);
