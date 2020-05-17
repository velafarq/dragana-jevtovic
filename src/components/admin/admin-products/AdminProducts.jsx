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
    
    const filter = (category, value) => {
        let filtered = allProducts;
        if (category === 'design'){
            setDesignFilter(value);
            if (value) {
                filtered = filtered.filter(p => p.design === value);
            }
            if (typeFilter) {
                filtered = filtered.filter(p => p.type === typeFilter);
            }
        } else if (category === 'type') {
            setTypeFilter(value);
            if (value) {
                filtered = filtered.filter(p => p.type === value);
            }
            if (designFilter) {
                filtered = filtered.filter(p => p.design === designFilter);
            }
        }
        setDisplayProducts(filtered);
    }

    const resetFilter = () => {
        setDisplayProducts(allProducts);
        setDesignFilter('');
        setTypeFilter('');
    }

    return (
        <Fragment>
        { displayProducts &&
            <Fragment>
                <button onClick={() => resetFilter()}>Reset</button>
                {/* filters */}
                <div className="form-input">
                    <label htmlFor="type">Filter by Type</label>
                    <select id="type" value={typeFilter} onChange={(event) => filter('type', event.target.value)} >
                        <DisplayOptions options={typeOptions} />
                    </select>
                </div>
                <div className="form-input">
                <label htmlFor="design">Filter by Design</label>
                <select id="design" value={designFilter} onChange={(event) => filter('design', event.target.value)} >
                    <DisplayOptions options={designOptions} />
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