import React, {useEffect, useState} from 'react';
import './AdminCustomize.scss';
import AdminNav from '../admin-nav/AdminNav'
import {updateBox, updateDesignHeader, updateHeroSlider} from '../../../store/actions/admin-actions';
import {connect, useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import { typeOptions, DisplayOptions, categoryOptions, DESIGN_NAMES, handlePrice } from '../../../helpers';
import BoxEditor from '../box-editor/BoxEditor';

const AdminCustomize = (props) => {
    const [drawer, setDrawer ] = useState(null);

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

    const toggleDrawer = (type) => {
        setDrawer(type);
    }

    return (
        <section className="admin-customize">
            <AdminNav />
            <button className="admin-button" onClick={() => toggleDrawer('box-editor')}>Edit Boxes</button>
            { drawer === 'box-editor' &&
                <div className="drawer active">
                    <BoxEditor toggleDrawer={toggleDrawer} editable={boxes_config} />
                </div>
            }
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