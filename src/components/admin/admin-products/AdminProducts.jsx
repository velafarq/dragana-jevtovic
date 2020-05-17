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
    const [searchWord, setSearchWord] = useState('');

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

        if (category === 'design') {
            setDesignFilter(value);
            if (value) {
                filtered = filterDropdown(filtered, value, 'design');
            }
            if (typeFilter) {
                filtered = filterDropdown(filtered, typeFilter, 'type');
            }
            if (searchWord) {
                filtered = filterString(filtered, searchWord);
            }
        } else if (category === 'type') {
            setTypeFilter(value);
            if (value) {
                filtered = filterDropdown(filtered, value, 'type');
            }
            if (designFilter) {
                filtered = filterDropdown(filtered, designFilter, 'design');
            }
            if (searchWord) {
                filtered = filterString(filtered, searchWord);
            }
        } else if (category === 'search') {
            setSearchWord(value);
            if (value) {
                filtered = filterString(filtered, value);
            }
            if (typeFilter) {
                filtered = filterDropdown(filtered, typeFilter, 'type');
            }
            if (designFilter) {
                filtered = filterDropdown(filtered, designFilter, 'design');
            }
        }
        setDisplayProducts(filtered);
    }

    const filterDropdown = (data, filter, key) => {
        return data.filter(p => p[key] === filter);
    }

    const filterString = (data, filter) => {
        return data.filter(p => {
            return Object.values(p).some(val => {
                if (typeof val === 'string') {
                    const tidyVal = val.toLowerCase().trim();
                    return tidyVal.includes(filter.toLowerCase().trim());
                } 
                return false;
            });
        });
    }

    const resetFilter = () => {
        setDisplayProducts(allProducts);
        setDesignFilter('');
        setTypeFilter('');
        setSearchWord('');
    }

    return (
        <Fragment>
        { displayProducts &&
            <section className='products'>
                <h2>Products</h2>
                {/* filters */}
                <section className="filters">
                    <div className="search-bar">
                        <div className="form-input">
                            <input type="text" placeholder='Search' value={searchWord} onChange={(event) => filter('search', event.target.value)} id='search' />
                        </div>
                    </div>
                    <div className="dropdowns">
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
                    </div>
                    <button onClick={() => resetFilter()}>Reset Filters</button>

                </section>
                
                <div className='table'>
                    {generateTable(displayProducts)}
                </div>
            </section>
        }
        </Fragment>
    )
}

export default AdminProducts;