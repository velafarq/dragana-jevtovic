import React, { Fragment, useEffect, useState } from 'react';
import './AdminProducts.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { typeOptions, designOptions, DisplayOptions} from '../../../helpers';

const AdminProducts = () => {
    useFirestoreConnect([
        { collection: 'products' }
    ]);

    const allProducts = useSelector(state => state.firestore.ordered.products);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [typeFilter, setTypeFilter] = useState('');
    const [designFilter, setDesignFilter] = useState('');

    useEffect(() => {
        setDisplayProducts(allProducts);
    }, [allProducts]);

    const row = (product) => (
        <Fragment key={product.id}>
            <div className='box'>{product.name}</div>
            <div className='box'>{product.design}</div>
            <div className='box'>{product.type}</div>
        </Fragment>
    );
    
    const generateTable = (products) => {
        return products.map((product) => row(product));
    }
    
    const filterByType = (type) => {
        const filtered = allProducts.filter(product => product.type === type);
        setDisplayProducts(filtered);
    }

    const resetFilter = () => {
        setDisplayProducts(allProducts);
    }

    return (
        <Fragment>
        { displayProducts && displayProducts.length &&
            <Fragment>
                <button onClick={() => filterByType('mugs')}>filter</button>
                <button onClick={() => resetFilter()}>Reset</button>
                {/* filters */}
                <div className="form-input">
                    <label htmlFor="type">Type</label>
                    <select id="type" value={typeFilter} onChange={(event) => filterByType(event)} >
                        <DisplayOptions options={typeOptions} />
                    </select>
                </div>
                <div className='table'>
                    {generateTable(displayProducts)}
                </div>
            </Fragment>
        }
        </Fragment>
        
       
    )
}

export default AdminProducts;