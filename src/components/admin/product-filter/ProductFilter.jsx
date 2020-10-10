import React, { useState } from 'react';
import './ProductFilter.scss';
import { adminTypeOptions, designOptions, DisplayOptions, hiddenOptions, setStringToBool} from '../../../helpers';

const ProductFilter = (props) => {
    const { allProducts, setDisplayProducts } = props;

    const [typeFilter, setTypeFilter] = useState('');
    const [designFilter, setDesignFilter] = useState('');
    const [searchWord, setSearchWord] = useState('');
    const [hiddenFilter, setHiddenFilter] = useState('all');

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
        if (designFilter && omit !== 'design') {
            filtered = filterDropdown(filtered, designFilter, 'design');
        }
        
        return filtered;
    }

    const filter = (category, value) => {
        let filtered = allProducts;
        switch (category) {
            case 'design':
                setDesignFilter(value);
                if (value) {
                    filtered = filterDropdown(filtered, value, 'design');
                }
                filtered = handleFilters(filtered, 'design');
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
        if (key === 'hidden') {
            return data.filter(p => p[key] === filter);
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
        setDesignFilter('');
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
                    <label htmlFor="design">Filter by Design</label>
                    <select id="design" value={designFilter} onChange={(event) => filter('design', event.target.value)} >
                        <DisplayOptions options={designOptions} />
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