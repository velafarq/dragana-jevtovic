import React, {useEffect, useState} from 'react';
import './ProductBoxes.scss';
import Box from './Box';
import { Link } from 'react-router-dom';
import {useFirestoreConnect} from 'react-redux-firebase';
import {DESIGN_NAMES} from '../../../helpers';
import {useSelector} from 'react-redux';
import Spinner from '../../spinner/Spinner';

const ProductBoxes = ({ layout }) => {
    const [ loading, setLoading ] = useState(true);
    const [ boxes, setBoxes ] = useState({});
    useFirestoreConnect([
        {collection: 'configurations', doc: 'boxes'}
    ]);
    const boxes_config = useSelector(
        ({ firestore: { data } }) => data.configurations && data.configurations.boxes
    );

    useEffect(() => {
        if (boxes_config) {
            const all_box_config = {};
            Object.keys(boxes_config).forEach(key => {
                const config = {
                    url: boxes_config[key],
                    title: DESIGN_NAMES[key],
                    design: key
                }
                all_box_config[key] = config;
            });
            setBoxes(all_box_config);
            setLoading(false);
        }
    }, [boxes_config])

    const box = (box, layout, i) => {
        return <Link to={`designs/${box.design}`} key={i}>
            <Box url={box.url} title={box.title} layout={layout}></Box>
        </Link>
    }

    const setArray = (views) => {
        const boxes_arr = [];
        views.forEach(view => {
            if (boxes[view]) {
                boxes_arr.push(boxes[view]);
            }
        });
        return boxes_arr;
    }

    const colView = () => {
        const top_views = ['royal_african', 'blue_guinea', 'african_velvet'];
        const bottom_views = ['african_elephant', 'new_creations', 'gifts', 'oceans_feather'];
        const products_top = setArray(top_views);
        const products_bottom = setArray(bottom_views);
    
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
        const top_views = ['blue_guinea', 'royal_african'];
        const bottom_views = ['african_velvet', 'african_elephant', 'oceans_feather'];
        const home_top = setArray(top_views);
        const home_bottom = setArray(bottom_views);

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
            { !loading ?
                <React.Fragment>{ layout === 'col' ? colView() : combinedView() }</React.Fragment> :
                <div className="product-boxes-spinner">
                    <Spinner />
                </div>
            }
        </React.Fragment>
    )
   
}

export default ProductBoxes;