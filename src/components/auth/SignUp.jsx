import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/auth-actions';
import { Redirect } from 'react-router-dom';
import './SignIn.scss';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.signUp(this.state);
    }

    render () {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="auth-container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" id="last_name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id="first_name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        <button className="admin-button btn pink lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            { authError && <p>{authError}</p>}
                        </div>
                    </div>
                    <div className="alternative">
                        <div>Already have an account? <NavLink to='/signin' className="link">Sign in</NavLink></div> 
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)