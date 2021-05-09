import React, {useEffect, useState} from 'react';
import {Fragment} from 'react';
import {connect} from 'react-redux';
import {DESIGN_NAMES} from '../../../helpers';
import {updateBox} from '../../../store/actions/admin-actions';
import './BoxEditor.scss';

const BoxEditor = (props) => {
    const { update, toggleDrawer, editable = null } = props;
    const [ boxes, setBoxes ] = useState(null);

    useEffect(() => {
        setBoxes({...editable});
    }, [editable]);

    const cancel = (event) => {
        event.preventDefault();
        toggleDrawer(null);
    }

    const save = (event) => {
        event.preventDefault();
        const payload = boxes;
        update(payload);
        toggleDrawer(null);
    }

    const handleChange = (event, key) => {
        setBoxes({...boxes, [key]: event.target.value});
    }

    return (
        <Fragment>
        { boxes && 
            <form className="box-editor-form">
                <h2>Configure Boxes</h2>
                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.blue_guinea}</label>
                    <input type="text" value={boxes.blue_guinea} onChange={(e) => handleChange(e, 'blue_guinea')}/>
                    <div><img src={boxes.blue_guinea} alt=""/></div>
                </div>

                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.royal_african}</label>
                    <input type="text" value={boxes.royal_african} onChange={(e) => handleChange(e, 'royal_african')}/>
                    <div><img src={boxes.royal_african} alt=""/></div>
                </div>

                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.african_elephant}</label>
                    <input type="text" value={boxes.african_elephant} onChange={(e) => handleChange(e, 'african_elephant')}/>
                    <div><img src={boxes.african_elephant} alt=""/></div>
                </div>

                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.african_velvet}</label>
                    <input type="text" value={boxes.african_velvet} onChange={(e) => handleChange(e, 'african_velvet')}/>
                    <div><img src={boxes.african_velvet} alt=""/></div>
                </div>

                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.oceans_feather}</label>
                    <input type="text" value={boxes.oceans_feather} onChange={(e) => handleChange(e, 'oceans_feather')}/>
                    <div><img src={boxes.oceans_feather} alt=""/></div>
                </div>

                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.new_creations}</label>
                    <input type="text" value={boxes.new_creations} onChange={(e) => handleChange(e, 'new_creations')}/>
                    <div><img src={boxes.new_creations} alt=""/></div>
                </div>
                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.gifts}</label>
                    <input type="text" value={boxes.gifts} onChange={(e) => handleChange(e, 'gifts')}/>
                    <div><img src={boxes.gifts} alt=""/></div>
                </div>
                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.custom}</label>
                    <input type="text" value={boxes.custom} onChange={(e) => handleChange(e, 'custom')}/>
                    <div><img src={boxes.custom} alt=""/></div>
                </div>
                <div className="actions">
                    <button className="admin-button cancel" onClick={(event) => cancel(event)}>Cancel</button>
                    <button className='admin-button' onClick={(event) => save(event)}>Save</button>
                </div>
            </form>
        }
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        update: payload => dispatch(updateBox(payload))
    }
}
export default connect(null, mapDispatchToProps)(BoxEditor);