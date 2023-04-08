import React, { Component } from 'react'
import Header from '../Header/Header'
import Popular from '../Popular/Popular'
import Filter from '../Filter/Filter'
import AllBooks from '../AllBooks/AllBooks'
import './App.css';
import getAllBooks from '../../APICalls'

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
        <Popular topBooks={this.state.topBooks}/>
        <Filter lists={this.state.lists} selectFilter={this.selectFilter}/>
        <AllBooks books={this.state.currentBooks}/>
      </div>
    )
  }
}



export default App;
