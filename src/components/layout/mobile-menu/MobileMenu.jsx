import React, {Fragment, useState } from 'react';
import './MobileMenu.scss';
import { useHistory } from 'react-router-dom';
import {categoryOptions} from '../../../helpers';

const MobileMenu = ({closeMenu}) => {
    const [expandProducts, setExpandProducts] = useState(false);
    const history = useHistory();
    const menuClick = (path) => {
        closeMenu(false);
        history.push(path)
    }

    return (
        <Fragment>
            <nav className="full-page-menu">
                <div className='menu-item' onClick={() => menuClick('/')}>Home</div>
                <div className='menu-item'>
                    <span>Products</span>
                    <i onClick={() => setExpandProducts(!expandProducts)} className="material-icons">{expandProducts ? 'expand_less' : 'expand_more'}</i>
                </div>
                {expandProducts &&
                    <div className="expanded-menu">
                        <div className='sub-menu-item' onClick={() => menuClick('/products')}>All Products</div>
                        { categoryOptions && categoryOptions.map((option, i) => 
                        <div key={i} className='sub-menu-item' onClick={() => menuClick(`/designs/${option.value}`)}>{option.label}</div>)}
                    </div>
                }
                <div className='menu-item' onClick={() => menuClick('/about')}>How to Purchase</div>
                <div className='menu-item' onClick={() => menuClick('/gallery')}>Gallery</div>
                <div className='menu-item' onClick={() => menuClick('/contact')}>Contact</div>
            </nav>
        </Fragment>
    )
}

export default MobileMenu;
