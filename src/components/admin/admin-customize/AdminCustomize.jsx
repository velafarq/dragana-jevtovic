import React, {useEffect, useState} from 'react';
import './AdminCustomize.scss';
import AdminNav from '../admin-nav/AdminNav'
import {updateBox, updateDesignHeader, updateHeroSlider} from '../../../store/actions/admin-actions';
import {connect, useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import { typeOptions, DisplayOptions, categoryOptions, DESIGN_NAMES, handlePrice } from '../../../helpers';

const AdminCustomize = (props) => {
    const [ loading, setLoading ] = useState(true);
    const [ boxes, setBoxes ] = useState({});
    const [ view, setView ] = useState('boxes');

    useFirestoreConnect([
        { collection: 'configurations', doc: 'boxes'},
        { collection: 'configurations', doc: 'design_header'},
        { collection: 'configurations', doc: 'home_config'}
    ]);

    const boxes_config = useSelector(
        ({ firestore: { data } }) => data.configurations && data.configurations.boxes
    );
    const design_header_config = useSelector(
        ({ firestore: { data } }) => data.configurations && data.configurations.design_header
    );
    const home_config = useSelector(
        ({ firestore: { data } }) => data.configurations && data.configurations.home_config
    );

    useEffect(() => {
       console.log(boxes_config)
       if (boxes_config && design_header_config && home_config) {
           setBoxes(boxes_config)
           setLoading(false);
       }
    }, [boxes_config, design_header_config, home_config]);

    const updateBox = (e, key, value) => {
        console.log(key, value)
        const updates = {...boxes};
        updates[key] = value;
        setBoxes(updates);

    }

    const save = (e) => {
        e.preventDefault();
        console.log(boxes)
    }
    const renderBoxInput = (key, value) => {
        return (
            <section className="form-image"  key={key}>
                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES[key]}</label>
                    <input type="text" value={value} onChange={(e) => updateBox(e, key, value)}/>
                </div>
                <img src={value} alt=""/>
            </section>
        )
    }
    return (
        <section className="admin-customize">
            <AdminNav />
            <form action="">
                <h2>Boxes Config</h2>
                {Object.keys(boxes).map(key => renderBoxInput(key, boxes[key]))}
                <div className="actions">
                <button className='admin-button' onClick={(event) => save(event)}>Save</button>
            </div>
            </form>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateBoxImages: payload => dispatch(updateBox(payload)),
        updateHeroSliderDesign: payload => dispatch(updateHeroSlider(payload)),
        updateDesignHeaderImg: payload => dispatch(updateDesignHeader(payload))
    }
}

export default connect(null, mapDispatchToProps)(AdminCustomize);