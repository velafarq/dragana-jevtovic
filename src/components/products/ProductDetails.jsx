import React, { useState, useEffect } from 'react'
import './ProductDetails.scss';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function ProductDetails(props) {
    useFirestoreConnect([
        { collection: 'products' }
    ]);
    const products = useSelector(state => state.firestore.ordered.products);
    const product_id = props.match.params.id;
    const [secondary_images, setSecondaryImages] = useState([]);
    const [primary_image, setPrimaryImage] = useState(null);
    
    const findProduct = (items, id) => {
        if (Array.isArray(items)) { 
            return items.find(p => p.id === id);
        }
        return null;
    }

    const product = findProduct(products, product_id);

    useEffect(() => {
        
        if (product && product.images) {
            handleSecondaryImages(product.images);
            handlePrimaryImage(product.images);
            console.log('in here boom')
        }

    }, [product]);

    function handleSecondaryImages(images) {
        const store = [];
        images.forEach(img => {
            if (!img.primary) {
                store.push(img);
            }
        })
        setSecondaryImages(store)
    }

    function handlePrimaryImage(images) {
        const found = images.find(img => img.primary);
        if (found !== undefined) {
            setPrimaryImage(found);
        }
    }
   
    console.log(product)
    function displayImages(imagesArr) {
        return imagesArr.map((img, i) => (
            <img src={img.url} key={i} alt={img.alt} onClick={() => handleSmallImgClick(img, i)} />
        ))
    }

    function handleSmallImgClick(img, i) {
        const updated = [...secondary_images];
        updated.splice(i, 1);
        updated.push(primary_image);

        setPrimaryImage(img);
        setSecondaryImages(updated)
    }
    
    return (
       <React.Fragment>
            {product ? <div className="container section">
              <div className="product-content"> 
                  <div className="mini-images">
                      { displayImages(secondary_images)}
                  </div>
                  <div className="main-image">
                      {primary_image && <img src={primary_image.url} alt={primary_image.alt} />}
                  </div>
                  <div className="product-info"></div>
              </div>
            </div> : 'Product does not exist!'}

       </React.Fragment>
        
    )
}

export default ProductDetails
