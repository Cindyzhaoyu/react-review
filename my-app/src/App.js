import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Warning(props){
  if(!props.warn){
    return null;
  }
  return (
    <div className="warning">warning</div>
  )
}

function Lists(props){
  const numbers = props.data;
  var listItems = numbers.map((i,number) => 
    <li key={i.toString()}>{i}+{number}</li>
  )
  return (
    <ul>{listItems}</ul>
  )
    
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function LoginButton(props) {
  return (
    <button className="login" onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  // debugger
  return (
    <button className="login" onClick={props.onClick}>
      Logout
    </button>
  );
}

function activateLasers(e){
  e.preventDefault()
  console.log(1)
}
class Time extends React.Component {
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return this.state.date.toLocaleTimeString();
  }
}

class Popper extends React.Component{
  constructor(){
      super();
      this.state = {name:'Hello world!'};
  }
  
  preventPop(name, e){    //事件对象e要放在最后
      e.preventDefault();
      alert(name);
  }
  
  render(){
      return (
          <div>
              <p>hello</p>
              {/* Pass params via bind() method. */}
              <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
          </div>
      );
  }
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
  // this.state = props.isLoggedIn;
}


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button className="taggle" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoginControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    debugger
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
  //  button =  {isLoggedIn ? (
  //     <LogoutButton onClick={this.handleLogoutClick} />
  //   ) : (
  //     <LoginButton onClick={this.handleLoginClick} />
  //   )},
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

class Show extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }

  render() { 
    return (
      <div>
        <Warning warn={this.state.showWarning}/>
        <button className="btn-click" onClick={this.handleToggleClick}>1212</button>
      </div>
    )
  }
}

class List extends React.Component{
  render(){
    return (
      <Lists data={[11,21,3,4,5,6]}/>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="time-part">时间:<Time/></p>
        <a className="btn-click" href="http://www.baidu.com" onClick={activateLasers}>事件</a>
        <div><Toggle /></div>
        <Popper/>
        <LoginControl />
        <Show/>
        <List/>
      </div>
    );
  }
};



export default App;
