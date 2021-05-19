import React, { useState, useEffect } from 'react';
import './ProductFilter.scss';
import { adminTypeOptions, filterCategoryOptions, DisplayOptions, hiddenOptions, setStringToBool} from '../../../helpers';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const ProductFilter = (props) => {
    useFirestoreConnect([
        { collection: 'products' }
    ]);
    const { setDisplayProducts } = props;

    const [typeFilter, setTypeFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [searchWord, setSearchWord] = useState('');
    const [hiddenFilter, setHiddenFilter] = useState('all');

    const allProducts = useSelector(state => state.firestore.ordered.products);

    useEffect(() => {
        if (allProducts) {
            const refreshFilters = (filtered) => {
                if (typeFilter) {
                    filtered = filterDropdown(filtered, typeFilter, 'type');
                }
                if (searchWord) {
                    filtered = filterString(filtered, searchWord);
                }
                if (hiddenFilter !== 'all') {
                    filtered = filterDropdown(filtered, hiddenFilter, 'hidden');
                }
                if (categoryFilter) {
                    filtered = filterDropdown(filtered, categoryFilter, 'category');
                }

                return filtered;
            }
            const refreshed = refreshFilters(allProducts);
            setDisplayProducts(refreshed)
        }
    }, [allProducts, categoryFilter, typeFilter, searchWord, hiddenFilter, setDisplayProducts]);

    const handleFilters = (filtered, omit) => {
        if (typeFilter && omit !== 'type') {
            filtered = filterDropdown(filtered, typeFilter, 'type');
        }
        if (searchWord && omit !== 'search') {
            filtered = filterString(filtered, searchWord);
        }
        if (hiddenFilter !== 'all' && omit !== 'hidden') {
            filtered = filterDropdown(filtered, hiddenFilter, 'hidden');
        }
        if (categoryFilter && omit !== 'category') {
            filtered = filterDropdown(filtered, categoryFilter, 'category');
        }
        
        return filtered;
    }

    const filter = (category, value) => {
        let filtered = allProducts;
        switch (category) {
            case 'category':
                setCategoryFilter(value);
                if (value) {
                    filtered = filterDropdown(filtered, value, 'category');
                }
                filtered = handleFilters(filtered, 'category');
                break;
            case 'type':
                setTypeFilter(value);
                if (value) {
                    filtered = filterDropdown(filtered, value, 'type');
                }
                filtered = handleFilters(filtered, 'type');
                break;
            case 'search':
                setSearchWord(value);
                if (value) {
                    filtered = filterString(filtered, value);
                }
                filtered = handleFilters(filtered, 'search');
                break;
            case 'hidden':
                const boolVal = setStringToBool(value);
                setHiddenFilter(boolVal);

                if (value !== 'all') {
                    filtered = filterDropdown(filtered, boolVal, 'hidden');
                }
                filtered = handleFilters(filtered, 'hidden');
                break;
            default: 
                break;
        }

        setDisplayProducts(filtered);
    }

    const filterDropdown = (data, filter, key) => {
        if (key === 'category') {
            return data.filter(p => {
                return p.categories.includes(filter);
            });
        } else {
            return data.filter(p => p[key] === filter);
        }
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
        setCategoryFilter('');
        setTypeFilter('');
        setSearchWord('');
        setHiddenFilter('all');
    }

    return (
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
                        <DisplayOptions options={adminTypeOptions} />
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="category">Filter by Category</label>
                    <select id="category" value={categoryFilter} onChange={(event) => filter('category', event.target.value)} >
                        <DisplayOptions options={filterCategoryOptions} />
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="hidden">Filter by Hidden</label>
                    <select id="hidden" value={hiddenFilter} onChange={(event) => filter('hidden', event.target.value)} >
                        <DisplayOptions options={hiddenOptions} />
                    </select>
                </div>
            </div>
            <button className='admin-button' onClick={() => resetFilter()}>Reset Filters</button>
        </section>
    )
}

export default ProductFilter;