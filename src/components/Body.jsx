import Home from './Home';
import React, {useContext} from 'react';
import {AppContext} from '../utils/Context';

function Body (props) {
  const {balance} = useContext(AppContext);

  return (
    <div>
      <h1>{props.text}</h1>
      <h3>Balance: {balance}</h3>
      <Home />
    </div>
  );
}

export default Body;