import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { connect } from 'react-redux';
// pull in actions from action/index
import { fetchUsers } from "../actions"

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchUsers();
    console.log(this.props);
  }
  render() {
    // return <div></div>
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.characters.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
const mapDispatchToProps = state => {
  return {
    // state
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}
// the chars and the fetching boolean
export default connect(mapDispatchToProps, {
  /* actions go here */
  fetchUsers
})(App);
