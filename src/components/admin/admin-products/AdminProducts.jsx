import React from 'react';

import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const AdminProducts = () => {
    useFirestoreConnect([
        { collection: 'products' }
    ]);

    const products = useSelector(state => state.firestore.ordered.products);
    console.log(products);

    return (
        <div>hey</div>
    )
}

export default AdminProducts;