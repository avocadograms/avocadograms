import React from 'react';

function LoginForm() {
  const handleSubmit = () => {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
  };

  return (
    <div id='login'>
      <form>
        <div id='userLogin'>
          <label htmlFor='username'> Username </label>
          <input id='username' name='username' defaultValue='username' />
        </div>
        <div id='passLogin'>
          <label htmlFor='password'> Password </label>
          <input id='password' name='password' defaultValue='password' />
        </div>
      </form>
      <button id='submitLogin' type='submit'>
        Submit
      </button>
    </div>
  );
}

export default LoginForm;
