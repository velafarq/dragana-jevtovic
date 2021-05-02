import React, {useEffect, useState} from 'react';
import './AdminCustomize.scss';
import AdminNav from '../admin-nav/AdminNav'
import {updateBox, updateDesignHeader, updateHeroSlider} from '../../../store/actions/admin-actions';
import {connect, useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
const AdminCustomize = (props) => {
    const [ loading, setLoading ] = useState(true);
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
       console.log(boxes_config, design_header_config, home_config)
       if (boxes_config && design_header_config && home_config) {
           setLoading(false);
       }
    }, [boxes_config, design_header_config, home_config]);

    const updateBox = () => {

    }
    return (
        <section className="admin-customize">
            <AdminNav />
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateSingleBoxImg: payload => dispatch(updateBox(payload)),
        updateHeroSliderDesign: payload => dispatch(updateHeroSlider(payload)),
        updateDesignHeaderImg: payload => dispatch(updateDesignHeader(payload))
    }
}

export default connect(null, mapDispatchToProps)(AdminCustomize);