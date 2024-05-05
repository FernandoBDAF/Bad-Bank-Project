"use client"

import './App.css';
import React, { useContext} from 'react';
import { Navigate } from 'react-router-dom';

function App() {

  if (!authenticated) {
    return <Navigate to="/log-in" />;
  }

  return <Navigate to="/home" />;

}

export default App;
