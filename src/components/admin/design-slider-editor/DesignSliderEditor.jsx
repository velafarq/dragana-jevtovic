import './DesignSliderEditor.scss';
import React, { useState, useEffect, Fragment }  from 'react';
import { updateHeroSlider } from '../../../store/actions/admin-actions';
import {connect} from 'react-redux';
import {DESIGN_NAMES} from '../../../helpers';

const DesignSliderEditor = (props) => {
    const { update, toggleDrawer, editable = null, design } = props;
    const [ slides, setSlides ] = useState(null);

    useEffect(() => {
        setSlides(editable[design]);
    }, [editable, design]);

    const cancel = (event) => { 
        event.preventDefault();
        toggleDrawer(null);
    }

    const save = (event) => {
        event.preventDefault();
        const payload = {...editable, [design]: slides};
        update(payload);
        toggleDrawer(null);
    }

    const handleChange = (event, index) => {
        console.log(event.target.value, slides)
        const all = [...slides];
        all[index] = event.target.value;
        setSlides(all);
    }
    const removeImg = (idx) => {
        const all = [...slides];
        all.splice(idx, 1);
        setSlides(all);
    }

    const addBlankSlide = (e) => {
        e.preventDefault();
        const all = [...slides];
        all.push('');
        setSlides(all);
    }

    return (
        <Fragment>
            { slides &&
                <form className="design-slider-editor-form">
                    <h2>Configure {DESIGN_NAMES[design]} Slides</h2>
                    { slides.length && slides.map((image, idx) => (
                        <div className="form-input" key={idx}>
                            <i className="material-icons" onClick={() => removeImg(idx)}>clear</i>
                            <label htmlFor={'image-url' + idx}>Image URL</label>
                            <input type="text" value={image} onChange={(event) => handleChange(event, idx)} />
                            <div className="header-img" style={{backgroundImage: "url(" + image + ")"}}></div>
                        </div>))
                    }
                    <button className="admin-button add-img" onClick={(event) => addBlankSlide(event)}>Add image</button>
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
        update: payload => dispatch(updateHeroSlider(payload))
    }
}

export default connect(null, mapDispatchToProps)(DesignSliderEditor);