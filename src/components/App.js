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
          <button className="button" onClick={this.props.onCountUp}>Up</button>
          <button className="button" onClick={this.props.onCountDown}>Down</button>
          <button className="button" onClick={this.props.onCountReset}>Reset</button>
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
    onCountUp: () => dispatch({type: 'COUNT_UP'}),
    onCountDown: () => dispatch({type: 'COUNT_DOWN'}),
    onCountReset: () => dispatch({type: 'COUNT_RESET'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
