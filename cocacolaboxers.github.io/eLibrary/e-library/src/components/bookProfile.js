import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

export default class BookProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          title: '',
          author: '',
          summary: ''
        }

        this.deleteBook = this.deleteBook.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3000/books/' + this.props.match.params.id)
          .then(response => {
            this.setState({
              title: response.data.title,
              author: response.data.author,
              summary: response.data.summary
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    deleteBook() {
        axios.delete('http://localhost:3000/books/' + this.props.match.params.id)
          .then(response => { console.log(response.data) });

        //Take user to book collection
        window.location = '/read';
    }
    
    takeMetoEdit(){
        window.location = '/edit/' + this.props.match.params.id;
    }

    takeMetoRead(){
        window.location = '/enjoy';
    }

    render(){
        return (
            <div className = "container">
                <h1>
                    You're viewing the selected book's profile
                </h1>
                <h2>
                    Title:
                </h2>
                <p className = "lead">
                    {this.state.title}
                </p>
                <h2>
                    Author:
                </h2>
                <p className = "lead">
                    {this.state.author}
                </p>
                <h2>
                    Summary:
                </h2>
                <p className = "lead">
                    {this.state.summary}
                </p>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" 
                    class="btn btn-secondary"
                    onClick = {() => {this.takeMetoRead()}}>Read</button>
                    <button type="button" 
                    class="btn btn-secondary"
                    onClick = {() => {}}>Listen</button>
                </div>
                <br/>
                <br/>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" 
                    class="btn btn-secondary"
                    onClick = {() => {this.takeMetoEdit()}}>Edit</button>
                    <button type="button" 
                    class="btn btn-secondary"
                    onClick = {() => {this.deleteBook()}}>Delete</button>
                </div>
            </div>
        )
    }
}