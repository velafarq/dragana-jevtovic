import React from 'react'
import './ProductDetails.scss';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function ProductDetails(props) {
    useFirestoreConnect([
        { collection: 'products' }
    ]);
    const products = useSelector(state => state.firestore.ordered.products);
    const product_id = props.match.params.id;

    const findProduct = (items, id) => {
        if (Array.isArray(items)) { 
            return items.find(p => p.id === id);
        }
        return null;
    }

    const product = findProduct(products, product_id);
    console.log(product)
    
    return (
       <React.Fragment>
            {product ? <div className="container section product-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="car-title">Product Title - </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aliquam sint architecto esse at corrupti ad distinctio ab eum nobis adipisci, voluptatum dolore nihil, quae cupiditate voluptatibus quod illum eius.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Boom boom</div>
                        <div>Date or something</div>
                    </div>
                </div>
            </div> : 'Product does not exist!'}

       </React.Fragment>
        
    )
}

export default ProductDetails
