import React from 'react';
import { connect } from 'react-redux';

const CounterPage = ({increment, decrement}) => (
  <div>
    <h1>Here you can count up or down</h1>
    <button onClick={increment}>Up</button>
    <br/>
    <br/>
    <button onClick={decrement}>Down</button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
};

export default connect(null, mapDispatchToProps)(CounterPage);