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
      loading: true
    }
    
  }

  componentDidMount() {
    getAllBooks()
      .then(data => {
        this.setState({ lists: data.results.lists, loading: false})
        console.log(data.results.lists)
      })
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
        <Popular />
        <Filter lists={this.state.lists} selectFilter={this.selectFilter}/>
        <AllBooks books={this.state.currentBooks}/>
      </div>
    )
  }
}



export default App;
