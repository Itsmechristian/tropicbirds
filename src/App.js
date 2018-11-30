import React, { Component } from 'react';
import './App.css';

// Components
import Routes from './Routes';

class App extends Component {
    constructor() {
      super();

      this.handleLoader = this.handleLoader.bind(this)
  }

  state = {
      load: false
  }

  componentDidMount() {
      window.addEventListener('load', this.handleLoader)
  }  

  handleLoader() {
      setTimeout(() => {
          this.setState({ load: true })
      }, 1000)
  }
  

  render() {
    if(this.state.load) {
      return (
        <div className="App">
          <Routes />
        </div>
      );
    }
    else {
      return (
        <div>
          <h1>loading</h1>          
        </div>
      )
    }
  }
}

export default App;
