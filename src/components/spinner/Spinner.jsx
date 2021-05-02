import React from 'react';
import './Spinner.scss';

const Spinner = () => {
    return (
        <section className="spinner">
            <div className="lds-spinner">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </section>
    );
}

export default Spinner;