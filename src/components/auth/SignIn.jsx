import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/auth-actions';
import { Redirect } from 'react-router-dom';
import './SignIn.scss';
import { NavLink } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render () {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="auth-container">
                <form className='auth-form' onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        <button className="admin-button">Login</button>
                        <div className="error">
                            {authError && <p>{authError}</p>}
                        </div>
                    </div>
                    <div className="alternative">
                        <div>Don't have an account? <NavLink to='/signup' className="link">Sign up</NavLink></div> 
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
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)