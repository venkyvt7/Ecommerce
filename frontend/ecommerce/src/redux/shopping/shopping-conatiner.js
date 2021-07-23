import  {connect} from 'react-redux';
import  {addToCart} from './shopping-action';


const mapStateToProps=state=>({

  

})


const mapDispatchToProps=dispatch=>({

    addToCartHandler:data=>dispatch(addToCart(data))


})




export default connect(mapStateToProps,mapDispatchToProps);
