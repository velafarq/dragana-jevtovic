import React from 'react';
import './ProductBoxes.scss';
import Box from './Box';
import { Link } from 'react-router-dom';

const ProductBoxes = ({ layout }) => {
    const african_elephant = {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fafrican-elephant-main.png?alt=media&token=05f67e2d-c364-4ee7-9341-e7a4f148ec60',
        title: 'African Elephant',
        design: 'african_elephant'
    }

    const royal_african = {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Froyal-african-main.png?alt=media&token=b6c6a8f9-d85f-43f8-838d-e4e3657fff78',
        title: 'Royal African',
        design: 'royal_african'
    }

    const blue_guinea = {
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-boxes%2Fblue-guinea-box.png?alt=media&token=d667bf04-de0e-44a6-80cb-edf4a9f0609d',
            title: 'Blue Guinea Fowl',
            design: 'blue_guinea'
    }

    const african_velvet = {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-boxes%2Fbrown-feather-box.png?alt=media&token=0992f2f6-b1c1-42ca-b310-7f4323720d31',
        title: 'African Velvet',
        design: 'african_velvet'
    }

    const oceans_feather = {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-boxes%2Ftwo-oceans-box.png?alt=media&token=e121ab51-b790-4daf-9186-bfc8cdf8a8fa',
        title: "Two Oceans' Feathers",
        design: 'oceans_feather'
    }

    const new_creations = {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-boxes%2Fnew-creations.jpg?alt=media&token=5c22d1e8-ae86-488d-a586-09538ccd384e',
        title: "New Creations",
        design: 'new_creations'
    }

    const gifts = {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-boxes%2Ftwo-oceans-box.png?alt=media&token=e121ab51-b790-4daf-9186-bfc8cdf8a8fa',
        title: "Gifts",
        design: 'gifts'
    }

    const home_top = [blue_guinea, royal_african];
    const home_bottom = [african_velvet, african_elephant, oceans_feather];
    const products_top = [new_creations, blue_guinea, gifts];
    const products_bottom = [royal_african, african_elephant, oceans_feather, african_velvet]
    const box = (box, layout, i) => {
        return <Link to={`designs/${box.design}`} key={i}>
            <Box url={box.url} title={box.title} layout={layout}></Box>
        </Link>
    } 

    const colView = () => {
        return  <div className="product-boxes small">
            <div className="boxes-row">
                { products_top && products_top.map((row, i) => {
                    return box(row, 'col', i);
                })}
            </div>
            <div className="boxes-row">
                { products_bottom && products_bottom.map((row, i) => {
                    return box(row, 'col', i);
                })}
            </div>
        </div>
    }

    const combinedView = () => {
        return <div className="product-boxes">
            <div className="boxes-row">
                { home_top && home_top.map((row, i) => {
                    return box(row, 'row', i)
                })}
            </div>

            <div className="boxes-row">
                { home_bottom && home_bottom.map((row, i) => {
                    return box(row, 'col', i);
                })}
            </div>
        </div>
    }

    return (
       <React.Fragment>
           { layout === 'col' ? colView() : combinedView() } 
       </React.Fragment>
    )
   
}

export default ProductBoxes;