import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//Import components
import Navbar from "./components/navbar.js"
import BookList from "./components/bookList.js";
import CreateBook from "./components/createBook.js";
import Register from "./components/register.js";
import Home from "./components/home.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path = "/home" component = {Home} />
      <Route path = "/collection" component = {BookList} />
      <Route path = "/create" component = {CreateBook} />
      <Route path = "/register" component = {Register} />
    </Router>
  );
}

export default App;
