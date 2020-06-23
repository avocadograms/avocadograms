import React from 'react';

function LoginForm() {
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
      <h3> Login </h3>
      <form>
        <div id='userLogin'>
          <label htmlFor='username'> Username </label>
          <input id='username' name='username' placeholder='username' />
        </div>
        <div id='passLogin'>
          <label htmlFor='password'> Password </label>
          <input id='password' name='password' placeholder='password' />
        </div>
      </form>
      <button id='submitLogin' type='submit'>
        Submit
      </button>
      <h3> Sign Up </h3>
      <form>
        <div id='userSignUp'>
          <label htmlFor='usernameSignUp'> Username </label>
          <input id='usernameSignUp' name='usernameSignUp' placeholder='username' />
        </div>
        <div id='passSignUp'>
          <label htmlFor='passwordSignUp'> Password </label>
          <input id='passwordSignUp' name='passwordSignUp' placeholder='password' />
        </div>
      </form>
      <button id='submitSignUp' type='submit'>
        Submit
      </button>
    </div>
  );
}

export default LoginForm;
