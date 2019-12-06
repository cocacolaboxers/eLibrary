import React, { Component } from 'react';
import axios from 'axios';

export default class EditBook extends Component {

constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeSummary = this.onChangeSummary.bind(this);
    this.onSaveChanges = this.onSaveChanges.bind(this);

    this.state = {
        title: '',
        author: '',
        summary: ''
    }
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

onChangeTitle(e){
     this.setState({
         title: e.target.value
     });
}

onChangeAuthor(e){
    this.setState({
        author: e.target.value
    });
}

onChangeSummary(e){
    this.setState({
        summary: e.target.value
    });
}

onSaveChanges(e){
    e.preventDefault();

    const book = {
        title: this.state.title,
        author: this.state.author,
        summary: this.state.summary 
    }

    console.log(book)

    axios.patch('http://localhost:3000/books/' + this.props.match.params.id, book)
    .then(res => console.log(res.data));

    //Take user back to book
    window.location = '/collection/' + this.props.match.params.id;
}

render() {
    return (
        <div className = "container">
            <h3>Welcome to the book editor!</h3>
            <form onSubmit = {this.onSaveChanges}>
            <div className = "form-group"> 
                <label>Title</label>
                <input  type = "text"
                    required
                    className = "form-control"
                    value = {this.state.title}
                    onChange = {this.onChangeTitle}
                    />
            </div>
            <div className = "form-group">
                <label>Author</label>
                <input 
                    type = "text" 
                    className = "form-control"
                    value = {this.state.author}
                    onChange = {this.onChangeAuthor}
                    />
            </div>
           
            <div className = "form-group">
                <label>Summary</label>
                <textarea className="form-control" 
                id="summaryFormControl" rows="3"
                value = {this.state.summary}
                onChange = {this.onChangeSummary}
                ></textarea>
            </div>
            {/*Chulería no funcional*/}
            <div className ="form-group">
            <label form = "exampleFormControlFile1">Add .txt file</label>
            <input type = "file" className="form-control-file" id="exampleFormControlFile1"/>
            </div>
            <div className = "form-group">
                <input type = "submit" value = "Save changes" className = "btn btn-outline-success" style = {{}} />
            </div>
            </form>
        </div>
    )
  }
}