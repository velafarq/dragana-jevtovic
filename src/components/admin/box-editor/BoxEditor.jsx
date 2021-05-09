import React, {useEffect, useState} from 'react';
import {DESIGN_NAMES} from '../../../helpers';
import './BoxEditor.scss';

const BoxEditor = (props) => {
    const { update, toggleDrawer, editable = null } = props;
    const [ boxes, setBoxes ] = useState(null);

    useEffect(() => {
        setBoxes({...editable});
    })
    const cancel = (event) => {
        event.preventDefault();
        // resetData()
        toggleDrawer();
    }

    const save = (event) => {
        event.preventDefault();
        const payload = editable;
        update(payload);
        toggleDrawer();
    }

    const handleChange = (event, key) => {
        setBoxes({...boxes, [key]: event.target.value});
    }

    return (
        <form>
            <h2>Configure Boxes</h2>
            <section className="form-image">
                <div className="form-input">
                    <label htmlFor="url">{DESIGN_NAMES.blue_guinea}</label>
                    <input type="text" value={boxes.blue_guinea} onChange={(e) => handleChange(e, 'blue_guinea')}/>
                </div>
                <img src={boxes.blue_guinea} alt=""/>
            </section>
        </form>
    )
}