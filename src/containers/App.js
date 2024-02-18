import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Loading from '../components/Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((users) => {
        this.setState({ robots: users }); // this will update the robots array with the users from the API
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().startsWith(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <Loading />
    ) : (
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-500 to-purple-900 min-h-screen ">
        <h1 className="text-5xl text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text uppercase p-4 mb-6 ">
          Robofriends
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
