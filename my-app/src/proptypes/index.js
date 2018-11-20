import React from 'react';
import PropTypes from 'prop-types';

class MiddleComponent extends React.Component {
  // 声明需要使用的Context属性
  static contextTypes = {
    propA: PropTypes.string,
    methodA: PropTypes.func,
    methodB: PropTypes.func
  };

  getChildContext() {
    return {
      propA1: 'propA1',
      methodA1: () => 'methodA1',
      methodB1: () => 'methodB1'
    };
  }

  render() {
    console.log(this.context);
    return <ChildComponent />;
  }
}
MiddleComponent.childContextTypes = {
  propA1: PropTypes.string,
  methodA1: PropTypes.func,
  methodB1: PropTypes.func
};

export default class ParentComponent extends React.Component {
  // 返回Context对象，方法名是约定好的
  getChildContext() {
    return {
      propA: 'propA',
      methodA: () => 'methodA',
      methodB: () => 'methodB'
    };
  }

  render() {
    return <MiddleComponent />;
  }
}
//声明Context对象属性
ParentComponent.childContextTypes = {
  propA: PropTypes.string,
  methodA: PropTypes.func,
  methodB: PropTypes.func
};

class ChildComponent extends React.Component {
  // 声明需要使用的Context属性
  static contextTypes = {
    propA: PropTypes.string,
    methodA: PropTypes.func,
    methodB: PropTypes.func,
    propA1: PropTypes.string,
    methodA1: PropTypes.func,
    methodB1: PropTypes.func,
    methodB2: PropTypes.func
  };

  render() {
    const { propA, methodA } = this.context;
    // debugger;

    console.log(`context.propA = ${propA}`); // context.propA = propA
    console.log(`context.methodA = ${methodA}`); // context.methodA = undefined

    return <div>11111</div>;
  }
}
