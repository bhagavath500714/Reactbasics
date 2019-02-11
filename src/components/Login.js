import React from 'react';
import '../App.css';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            },
            successMessage: '',
            errorMessage: ''
        }
    }

    handleChange = (event, key) => {
        this.state[key] = event.target.value
        this.setState(this.state)
        this.setErrors();
    }
    login = () => {
        this.setErrors();
        console.log(this.state.email);
        if (!this.state.errors['email'] && !this.state.errors['password']) {
            window.location = '/dashboard';
            //window.open("/dashboard");
        }
    }

    setErrors = () => {
        this.state.errors["email"] = '';
        this.state.errors["password"] = '';
        if (!this.state.email) {
            this.state.errors["email"] = 'Enter Email';
        }
        if (!this.state.password) {
            this.state.errors["password"] = 'Enter password';
        }
        this.setState(this.state);
    }



    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                <div style={{ width: '320px', margin: '0 auto', border: '1px solid #e8e6e6', padding: '25px 15px', borderRadius: '.25rem' }}>
                    <form onSubmit={() => this.login()}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} name="email" />
                            <span className="login-error"> {this.state.errors["email"] !== '' && <span className="msg-error" >{this.state.errors["email"]}</span>}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={this.state.password} onChange={(e) => this.handleChange(e, 'password')} />
                            <span className="login-error">{this.state.errors["password"] !== '' && <span className="msg-error" >{this.state.errors["password"]}</span>}</span>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary" onClick={() => this.login()}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
