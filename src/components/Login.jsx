import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {
    render() { 
        return ( 
            <div className="login_container">
                <form>
                    <div className="login_title">
                        <h1>Log In</h1>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="email" placeholder="email" required/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="password" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-dark">Log In</button>
                    </div>
                    <Link to="/signup">Not a user? Create an account</Link>
                </form>
            </div>
         );
    }
}
 
export default Login;