import React, { Component } from 'react';
import axios from 'axios';

const Book = props => (
    <tr>
      <td>{props.book.title}</td>
      <td>{props.book.author}</td>
      <td>{props.book.summary}</td>
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
      return <Book book = {currentBook} />;
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
                <th>Title</th>
                <th>Author</th>
                <th>Summary</th>
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