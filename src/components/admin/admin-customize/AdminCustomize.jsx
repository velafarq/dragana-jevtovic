import React, {useState} from 'react';
import './AdminCustomize.scss';
import AdminNav from '../admin-nav/AdminNav'
import {updateBox, updateDesignHeader, updateHeroSlider} from '../../../store/actions/admin-actions';
import {connect, useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import BoxEditor from '../box-editor/BoxEditor';
import DesignHeaderEditor from '../design-header-editor/DesignHeaderEditor';
import DesignSliderEditor from '../design-slider-editor/DesignSliderEditor';

const AdminCustomize = (props) => {
    const [drawer, setDrawer ] = useState(null);
    const [design, setDesign ] = useState(null);

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

    const openDesignSlider = (design) => {
        setDesign(design);
        setDrawer('design-slider-editor');
    }

    return (
        <section className="admin-customize">
            <AdminNav />
            <button className="admin-button" onClick={() => toggleDrawer('box-editor')}>Edit Boxes</button>
            <button className="admin-button" onClick={() => toggleDrawer('design-header-editor')}>Edit Design Headers</button>
            <button className="admin-button" onClick={() => openDesignSlider('blue_guinea')}>Edit Blue Guinea Fowl Slides</button>
            <button className="admin-button" onClick={() => openDesignSlider('royal_african')}>Edit Royal African Slides</button>
            <button className="admin-button" onClick={() => openDesignSlider('african_elephant')}>Edit African Elephant Slides</button>
            <button className="admin-button" onClick={() => openDesignSlider('african_velvet')}>Edit African Velvet Slides</button>
            <button className="admin-button" onClick={() => openDesignSlider('oceans_feather')}>Edit Oceans' Feather Slides</button>
            <button className="admin-button" onClick={() => openDesignSlider('gifts')}>Edit Gifts Slides</button>
            <button className="admin-button" onClick={() => openDesignSlider('custom')}>Edit Custom Slides</button>

            { drawer === 'box-editor' &&
                <div className="drawer active">
                    <BoxEditor toggleDrawer={toggleDrawer} editable={boxes_config} />
                </div>
            }
            { drawer === 'design-header-editor' &&
                <div className="drawer active">
                    <DesignHeaderEditor toggleDrawer={toggleDrawer} editable={design_header_config} />
                </div>
            }
            { drawer === 'design-slider-editor' &&
                <div className="drawer active">
                    <DesignSliderEditor toggleDrawer={toggleDrawer} design={design} editable={home_config}/>
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