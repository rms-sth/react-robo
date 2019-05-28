import  React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import {robots} from './robots';

class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    
  }

  render(){
    const filteredRobot = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    // console.log(filteredRobot);

    return (
      <div className="tc">
        <h1 className="f1" id="title">My Virtual Robot Friends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList robots={filteredRobot}/>
      </div>
    );
  }
}

export default App;