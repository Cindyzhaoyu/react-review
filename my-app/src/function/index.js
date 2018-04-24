import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  const element = (
    <h1>
      Hello, {getGreeting(user)}!
    </h1>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );