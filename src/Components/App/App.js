import React, { Component } from 'react'
import { app, analytics, auth } from '../../firebase';
import './App.css';

import Header from '../Header/Header'
import Popular from '../Popular/Popular'
import Filter from '../Filter/Filter'
import AllBooks from '../AllBooks/AllBooks'
import getAllBooks from '../../APICalls'
import Login from '../Login/Login';

import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      currentBooks: [],
      topBooks: [],
      loading: true
    }
  }
 
  componentDidMount() {
    getAllBooks()
      .then(data => {
        this.setState({ lists: data.results.lists, loading: false})
        console.log(data.results.lists)
      this.getTopBooks()
      })
  }
  getTopBooks() {
    this.setState({ topBooks: [this.state.lists[0].books[0], this.state.lists[1].books[0], this.state.lists[2].books[0], this.state.lists[3].books[0]]})
  }
  selectFilter = (name) => {
     const filterBooks = this.state.lists.find(list => {
     return list.list_name === name
     })
     this.setState({currentBooks: filterBooks.books})
  } 

  render(){
    if (this.state.loading) {
      return
    }
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render={() => {
          return (
            <main>
              <Popular topBooks={this.state.topBooks}/>
              <Filter lists={this.state.lists} selectFilter={this.selectFilter}/>
              <AllBooks books={this.state.currentBooks}/>
            </main>
          );
        }} />
        <Route exact path='/login' render={() => {
          return (
            <Login />
          );
        }} />
      </div>
    )
  }
}



export default App;
