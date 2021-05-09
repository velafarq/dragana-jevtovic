import './DesignHeaderEditor.scss';
import React, { useState, useEffect }  from 'react';
import {updateDesignHeader} from '../../../store/actions/admin-actions';
import {connect} from 'react-redux';
import {Fragment} from 'react';
import {DESIGN_NAMES} from '../../../helpers';

const DesignHeaderEditor = (props) => {
    const { update, toggleDrawer, editable = null } = props;
    const [ headers, setHeaders ] = useState(null);

    useEffect(() => {
        setHeaders({...editable});
        console.log(editable)
    }, [editable]);

    const cancel = (event) => { 
        event.preventDefault();
        toggleDrawer(null);
    }

    const save = (event) => {
        event.preventDefault();
        const payload = headers;
        update(payload);
        toggleDrawer(null);
    }

    const handleChange = (event, key) => {
        setHeaders({...headers, [key]: event.target.value});
    }

    return (
        <Fragment>
            { headers &&
                <form className="design-header-editor-form">
                    <h2>Configure Headers</h2>
                    <div className="form-input">
                        <label htmlFor="url">{DESIGN_NAMES.blue_guinea}</label>
                        <input type="text" value={headers.blue_guinea} onChange={(e) => handleChange(e, 'blue_guinea')}/>
                        <div className="header-img" style={{backgroundImage: "url(" + headers.blue_guinea + ")"}}></div>
                    </div>

                    <div className="form-input">
                        <label htmlFor="url">{DESIGN_NAMES.royal_african}</label>
                        <input type="text" value={headers.royal_african} onChange={(e) => handleChange(e, 'royal_african')}/>
                        <div className="header-img" style={{backgroundImage: "url(" + headers.royal_african + ")"}}></div>
                    </div>

                    <div className="form-input">
                        <label htmlFor="url">{DESIGN_NAMES.african_elephant}</label>
                        <input type="text" value={headers.african_elephant} onChange={(e) => handleChange(e, 'african_elephant')}/>
                        <div className="header-img" style={{backgroundImage: "url(" + headers.african_elephant + ")"}}></div>
                    </div>

                    <div className="form-input">
                        <label htmlFor="url">{DESIGN_NAMES.african_velvet}</label>
                        <input type="text" value={headers.african_velvet} onChange={(e) => handleChange(e, 'african_velvet')}/>
                        <div className="header-img" style={{backgroundImage: "url(" + headers.african_velvet + ")"}}></div>
                    </div>

                    <div className="form-input">
                        <label htmlFor="url">{DESIGN_NAMES.oceans_feather}</label>
                        <input type="text" value={headers.oceans_feather} onChange={(e) => handleChange(e, 'oceans_feather')}/>
                        <div className="header-img" style={{backgroundImage: "url(" + headers.oceans_feather + ")"}}></div>
                    </div>

                    <div className="form-input">
                        <label htmlFor="url">{DESIGN_NAMES.new_creations}</label>
                        <input type="text" value={headers.new_creations} onChange={(e) => handleChange(e, 'new_creations')}/>
                        <div className="header-img" style={{backgroundImage: "url(" + headers.new_creations + ")"}}></div>
                    </div>
                    <div className="form-input">
                        <label htmlFor="url">{DESIGN_NAMES.gifts}</label>
                        <input type="text" value={headers.gifts} onChange={(e) => handleChange(e, 'gifts')}/>
                        <div className="header-img" style={{backgroundImage: "url(" + headers.gifts + ")"}}></div>
                    </div>
                    <div className="form-input">
                        <label htmlFor="url">{DESIGN_NAMES.custom}</label>
                        <input type="text" value={headers.custom} onChange={(e) => handleChange(e, 'custom')}/>
                        <div className="header-img" style={{backgroundImage: "url(" + headers.custom + ")"}}></div>
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
        update: payload => dispatch(updateDesignHeader(payload))
    }
}

export default connect(null, mapDispatchToProps)(DesignHeaderEditor);