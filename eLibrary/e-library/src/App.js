import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//Import components
import Navbar from "./components/navbar.js"
import BookList from "./components/bookList.js";
import CreateBook from "./components/createBook.js";
import Register from "./components/register.js";
import Home from "./components/home.js";
import BookProfile from "./components/bookProfile.js";
import EditBook from "./components/editBook.js"
import Enjoy from "./components/readBook.js"

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path = "/" exact component = {Home} />
      <Route path = "/read" component = {BookList} />
      <Route path = "/enjoy" component = {Enjoy} />
      <Route path = "/collection/:id" component = {BookProfile} />
      <Route path = "/edit/:id" component = {EditBook} />
      <Route path = "/create" component = {CreateBook} />
      <Route path = "/register" component = {Register} />
    </Router>
  );
}

export default App;
