import React, { Fragment, useEffect, useState } from 'react';
import './AdminProducts.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ProductCreator from '../product-creator/ProductCreator';
import ProductFilter from '../product-filter/ProductFilter';
import { connect } from 'react-redux';
import { deleteProduct } from '../../../store/actions/admin-actions';

const AdminProducts = (props) => {
    useFirestoreConnect([
        { collection: 'products' }
    ]);

    const allProducts = useSelector(state => state.firestore.ordered.products);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [editable, setEditable] = useState(null);

    const [drawer, setDrawer] = useState(false);

   const toggleDrawer = () => {
        if (drawer) {
            setEditable(null);
        }
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
            <div className='box table-actions'>
                <i className="material-icons edit" onClick={() => editProduct(product)}>edit</i>
                <i className="material-icons delete" onClick={() => deleteProduct(product.id)}>delete_forever</i>
            </div>
        </Fragment>
    );

    const deleteProduct = (id) => {
        props.delete(id);
    }

    const editProduct = (product) => {
        setEditable(product);
        toggleDrawer();
    }
    
    const generateTable = (products) => {
        return products.map((product) => row(product));
    }

    return (
        <Fragment>
        { displayProducts &&
            <section className='products'>
                <div className="header">
                    <h2 className="page-title">Products</h2>
                    <button className='admin-button create-new' onClick={toggleDrawer}>Create new product</button>
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
                    <ProductCreator toggleDrawer={toggleDrawer} editable={editable} />
                </div>
            </section>
        }
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (payload) => dispatch(deleteProduct(payload))
    }
}
export default connect(null, mapDispatchToProps)(AdminProducts);