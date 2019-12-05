import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//Import components
import Navbar from "./components/navbar.js"
import BookList from "./components/bookList.js";
import CreateBook from "./components/createBook.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path = "/collection" component = {BookList} />
      <Route path = "/create" component = {CreateBook} />
    </Router>
  );
}

export default App;
