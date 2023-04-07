import React, { Component } from 'react'
import Header from '../Header/Header'
import Popular from '../Popular/Popular'
import Filter from '../Filter/Filter'
import AllBooks from '../AllBooks/AllBooks'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Popular />
        <Filter />
        <AllBooks />
      </div>
    )
  }
}



export default App;
