import React from 'react'

function ProductDetails(props) {
    const id = props.match.params.id;

    
    return (
        <div className="container section product-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="car-title">Product Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aliquam sint architecto esse at corrupti ad distinctio ab eum nobis adipisci, voluptatum dolore nihil, quae cupiditate voluptatibus quod illum eius.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Boom boom</div>
                    <div>Date or something</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
