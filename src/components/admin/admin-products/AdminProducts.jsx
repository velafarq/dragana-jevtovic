import React, { Fragment, useEffect, useState } from 'react';
import './AdminProducts.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ProductCreator from '../product-creator/ProductCreator';
import ProductFilter from '../product-filter/ProductFilter';

const AdminProducts = () => {
    useFirestoreConnect([
        { collection: 'products' }
    ]);

    const allProducts = useSelector(state => state.firestore.ordered.products);
    const [displayProducts, setDisplayProducts] = useState([]);

    const [drawer, setDrawer] = useState(false);

   const toggleDrawer = (e) => {
        e.preventDefault();
        setDrawer(!drawer);
    }

    useEffect(() => {
        setDisplayProducts(allProducts);
    }, [allProducts]);

    const row = (product) => (
        <Fragment key={product.id}>
            <div className='box'>{product.name}</div>
            <div className='box'>{product.design}</div>
            <div className='box'>{product.type}</div>
            <div className='box actions'>
                <i className="material-icons edit">edit</i>
                <i className="material-icons delete">delete_forever</i>
            </div>
        </Fragment>
    );
    
    const generateTable = (products) => {
        return products.map((product) => row(product));
    }

    return (
        <Fragment>
        { displayProducts &&
            <section className='products'>
                <div className="header">
                    <h2 className="page-title">Products</h2>
                    <button className='create-new' onClick={(e) => toggleDrawer(e)}>Create new product</button>
                </div>
                <ProductFilter allProducts={allProducts} setDisplayProducts={setDisplayProducts} />
                <div className='table'>
                    <div className="box title">Name</div>
                    <div className="box title">Design</div>
                    <div className="box title">Type</div>
                    <div className="box title"></div>
                    {generateTable(displayProducts)}
                </div>
                <div className={drawer ? 'drawer active' : 'drawer'}>
                    <ProductCreator toggleDrawer={toggleDrawer} />
                </div>
            </section>
        }
        </Fragment>
    )
}

export default AdminProducts;