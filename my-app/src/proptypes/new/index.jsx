import React from 'react';

const { Provider, Consumer } = React.createContext(1);

export default class App extends React.Component {
  state = {
    type: 1
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        type: this.state.type + 1
      });
    }, 500);
  }

  render() {
    return <Provider value={this.state.type}>{this.props.children}</Provider>;
  }
}

export const Comp = () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(<p key={i}>{i}</p>);
  }

  return (
    <div>
      <Consumer>{type => <p>{type}</p>}</Consumer>
      {arr}
    </div>
  );
};
