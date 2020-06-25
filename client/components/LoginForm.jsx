import React from 'react';
import GithubIcon from "mdi-react/GithubIcon";
import { useHistory } from "react-router-dom";
const CLIENT_ID = '8703526d92f75376e6ec';
const CLIENT_SECRET = '27bb1b1e3e7c6b045747c8a679c35e33846bc3b8';
//const { CLIENT_ID, CLIENT_SECRET } = require('../../secrets-oauth.js');
const fetch = require('node-fetch');



const LoginForm = () => {

  // const handleClick = () => {
  //   const history = useHistory();
  //   history.push("/oauth");
  // }

  const handleClick = () => {
    const config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };
    fetch("/oauth", {
      method: 'GET',
      mode: 'no-cors',
      headers: {'Access-Control-Allow-Origin': '*'}
    })
      // .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log('login in form fetch', err))
  }

  const handleLogin = () => {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    // post route supplying sign up info for verfiying user
  };

  const handleSignUp = () => {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    // post route supplying sign up info to backend/db
  };

  return (
    <div id='login'>
      <h1> AvocadoGrams! </h1>
      <div id="login-container" >
        <a id="login-link" href='https://github.com/login/oauth/authorize?client_id=8703526d92f75376e6ec&scope=user:email'>
          <GithubIcon />
          <span className="github">Login with Github</span>
        </a>  
      </div>
      {/* <h3> Login </h3>
      <form>
        <div>
          <div id='usernameInfo'>
            <label htmlFor='username'> Username </label>
          </div>
          <div id ='userInput'>
            <input id='username' name='username' placeholder='username' />
          </div>
          <div id='passwordInfo'>
            <label htmlFor='password'> Password </label>
          </div>
          <div id='userInput'>
            <input id='password' name='password' placeholder='password' />
          </div>
        </div>
      </form>
      <button id='submitLogin' type='submit'>
        Submit
      </button>
      <h3> Sign Up </h3>
      <form>
        <div>
          <div id='usernameInfo'>
            <label htmlFor='usernameSignUp'> Username </label>
          </div>
          <div id='userInput'>
            <input id='usernameSignUp' name='usernameSignUp' placeholder='username' />
          </div>
          <div id='passwordInfo'>
            <label htmlFor='passwordSignUp'> Password </label>
          </div>
          <div id='userInput'>
            <input id='passwordSignUp' name='passwordSignUp' placeholder='password' />
          </div>
        </div>
      </form>
      <button id='submitSignUp' type='submit'>
        Submit
      </button> */}
    </div>
  );
}

export default LoginForm;
