import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter Using Redux</h1>
        </header>
        <section>
          <h2><span>{this.props.count}</span></h2>
          <button className="button" onClick={this.props.onAgeUp}>Up</button>
          <button className="button" onClick={this.props.onAgeDown}>Down</button>
          <button className="button" onClick={this.props.onAgeReset}>Reset</button>
          <p className="counter_text">
            This counter goes from 0 to 20.<br/>
            Reset button will reset counter to 0.
          </p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'}),
    onAgeReset: () => dispatch({type: 'AGE_RESET'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
