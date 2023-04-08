import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({product, handleRemoveFromCart}) => {
    return (
        <div style={{border: '1px solid #333',display:'flex',alignItems:'center',justifyContent:'space-between', marginBottom: '20px',marginRight:'50px', paddingRight:'20px'}}>
           <div style={{width:'600px',display:'flex',height:'200px'}} className='image-content'>
            <img style={{width: '200px', height: '100%'}} src={product.img} alt="product image" />
            <div>
            <h2>{product.name}</h2>
            <p>price: ${product.price}</p>
            <p>shipping charge: ${product.shipping}</p>
            </div>
                
           </div>
       <button onClick={()=>{handleRemoveFromCart(product.id)}}>
       <div className="delet-icone" style={{background:'rgba(235, 87, 87, 0.3)', width:'55px', height:'55px', borderRadius:'50%', alignItems:'center', justifyContent:'center', display:'flex'}}>
          
          <FontAwesomeIcon style={{color:'#EB5757', fontSize:'30px'}} icon={faTrashAlt}/>
     
         </div>
       </button>
        </div>
    );
};

export default ReviewItem;