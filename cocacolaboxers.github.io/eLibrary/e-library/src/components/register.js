import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {

constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onJoin = this.onJoin.bind(this);

    this.state = {
        name: '',
        email: '',
        password: ''
    }
}

onChangeName(e){
     this.setState({
         name: e.target.value
     });
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

onJoin(e){
    e.preventDefault();

    const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    }

    console.log(user)

    axios.post('http://localhost:3000/users/register', user)
    .then(res => console.log(res.data));

    //Take registered user to book collection
    window.location = '/read';
}

render() {
    return (
        <div className = "container">
            <h3>Gain access to a bunch of free books!</h3>
            <form onSubmit = {this.onJoin}>
            <div className = "form-group"> 
                <label>Name</label>
                <input  type = "text"
                    required
                    className = "form-control"
                    value = {this.state.name}
                    onChange = {this.onChangeName}
                    />
            </div>
            <div className = "form-group">
                <label>Email</label>
                <input 
                    type = "email" 
                    className = "form-control"
                    value = {this.state.email}
                    onChange = {this.onChangeEmail}
                    />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className = "form-group">
                <label>Password</label>
                <input 
                    type = "password" 
                    className = "form-control"
                    value = {this.state.password}
                    onChange = {this.onChangePassword}
                    />
            </div>

            <div className = "form-group">
                <input type = "submit" value = "Join!" className = "btn btn-outline-success" style = {{}} />
            </div>
            </form>
        </div>
    )
  }
}