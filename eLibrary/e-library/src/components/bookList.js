import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Book = props => (
    <tr>
      <td>
          <Link to = {"/collection/" + props.book._id}> {props.book.title} </Link>
        </td>
    </tr>
  )

export default class BookList extends Component {

constructor(props){
     super(props);

     this.state = {
         books: [] 
     } 
}

componentDidMount(){
    axios.get('http://localhost:3000/books').then(res => {
        this.setState({books: res.data})
    })
}

bookList() {
    return this.state.books.map(currentBook => {
      return <Book book = {currentBook} key = {currentBook._id}/>;
    })
  }

render() { 
    return (
        <div className = "container">
            <div>
          <h3>Our Book Collection</h3>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Available titles</th>
              </tr>
            </thead>
            <tbody>
              { this.bookList() }
            </tbody>
          </table>
        </div>
        </div>
      )
  }
}