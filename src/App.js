import React, { Component } from 'react'
import Header from './Header'
import Popular from './Popular'
import Filter from './Filter'
import AllBooks from './AllBooks'
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
