import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import Library from '../lib.jpg';

export default class Home extends Component {

constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onLog = this.onLog.bind(this);

    this.state = {
        email: '',
        password: '',
        errorFlag: false
    }
}

onChangeEmail(e){
    this.setState({
        email: e.target.value
    });
}

onChangePassword(e){
    this.setState({
        password: e.target.value
    });
}

onLog(e){
    e.preventDefault();

    const user = {
        email: this.state.email,
        password: this.state.password
    }

    console.log(user)

    axios.post('http://localhost:3000/login', user)
    .then(res => {
        console.log(res.data)
        //Take logged user to book collection
        window.location = '/read';
    }).catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
        this.setState({
            errorFlag: true
        })
      });
}

render() {
    const ErrorMessage = () => (
        <div>
            <p style={{color: 'red'}}><em>
                Sorry, try again
            </em></p>
        </div>
      )
    return (
        <div className = "container">
            {/* <img src = {Library} class="img-fluid" alt = ""/> */}
            <h3>Welcome to eLibrary!</h3>
            <form onSubmit = {this.onLog}>
                <div className="form-row">
                    <div className="col">
                        <input type="email" 
                        className="form-control" 
                        placeholder="Email"
                        value = {this.state.email}
                        onChange = {this.onChangeEmail}
                        />
                    </div>
                    <div className="col">
                        <input type="password" 
                        className="form-control" 
                        placeholder="Password"
                        value = {this.state.password}
                        onChange = {this.onChangePassword}
                        />
                    </div>
                    <div className="col">
                        <input type="submit" 
                        value = "Log in"
                        className="btn btn-outline-success"
                        />
                    </div>
                </div>
            </form>  
            {this.state.errorFlag ? <ErrorMessage/> : null}
            <p>
               Not a member? <Link to = {"/register"}> Register </Link>
             </p>
        </div>
    )
  }
}