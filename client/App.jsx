import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';
import './stylesheets/styles.scss';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check if user is logged in
  useEffect(() => {
    fetch('/verify').then((res) => {
      // if user is already logged in: 
      if (res.status === 200) {
        setIsLoggedIn(true);
      }
    })
    .catch((err) => err);
  }, []);

  if (isLoggedIn) {
    return (
      <div>
        <MainContainer />
      </div>
    )
  } else {
    return (
      <div>
        <LoginContainer />
      </div>
    )
  }

}

export default App;