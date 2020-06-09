import React from 'react';
import './ProductBoxes.scss';
import Box from './Box';

const ProductBoxes = () => {

    const top_row = [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d',
            title: 'Blue Guinea Fowl',
            layout: 'row',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d',
            title: 'Royal African',
            layout: 'row',
        },
    ]

    const bottom_row = [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d',
            title: 'Brown Feathers',
            layout: 'col',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d',
            title: 'African Elephant',
            layout: 'col',
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d',
            title: "Two Oceans' Feathers",
            layout: 'col',
        },
    ]
    return (
        <div className="product-boxes">
            <div className="top-row">
                { top_row && top_row.map(row => {
                    return <Box url={row.url} title={row.title} layout={row.layout} />
                })}
            </div>

            <div className="bottom-row">
                { bottom_row && bottom_row.map(row => {
                    return <Box url={row.url} title={row.title} layout={row.layout} />
                })}
            </div>
            
        </div>
    )
   
}

export default ProductBoxes;