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

  render(){
    if (this.state.loading) {
      return
    }
    return (
      <div className="App">
        <Header />
        <Popular />
        <Filter />
        <AllBooks books={this.state.lists[0].books}/>
      </div>
    )
  }
}



export default App;
