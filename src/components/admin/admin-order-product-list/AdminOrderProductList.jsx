import React, { Fragment } from 'react';
import './AdminOrderProductList.scss';
import { DESIGN_NAMES, handlePrice } from '../../../helpers';

const AdminOrderProductList = ({ items }) => {
    const currency = 'usd';

    const getPrimaryImage = (item) => {
        if (item.images && item.images.length) {
            const image = item.images.find(img => img.primary);
            return image.url;
        }
        return '';
    }

    const calculateTotal = (price, qty) => {
        const total = price * qty;
        return handlePrice(total, currency); 
    }

    const calculateGrandTotal = () => {
        let total = 0;
        items.forEach(one => {
            const { item, quantity } = one;
                total = total + item.price[currency] * quantity;
        });
        return handlePrice(total, currency);
    }

    const row = (itemDetails) => {
        const { item, quantity } = itemDetails;

        return (
            <Fragment key={item.id}>
                <div className='box product-name'>
                    <div>{DESIGN_NAMES[item.design]}</div>
                    <div>{item.name}</div>
                </div>
                <div className='box cart-product-img'><img src={getPrimaryImage(item)} alt="" /></div>
                <div className='box'>{handlePrice(item.price, currency)}</div>
                <div className="box qty">{quantity}</div>
                <div className="box">{calculateTotal(item.price[currency], quantity)}</div>
            </Fragment>);
    }

    const generateTable = (products) => {
        return products.map((product, i) => row(product, i));
    }

    return (
        <div className="admin-order-list">
            {items && items.length ? 
                <React.Fragment>
                    <div className="table">
                        <div className="box title"></div>
                        <div className="box title"></div>
                        <div className="box title">Price</div>
                        <div className="box title">Qty</div>
                        <div className="box title">Total</div>
                        {generateTable(items)}
                    </div>
                    <div className="total">Total: {calculateGrandTotal()}</div>
                </React.Fragment>
                : <div className="empty-cart">No items.</div>
            }
        </div>
    )
}

export default AdminOrderProductList;