import React, { Component } from "react";

export default class EventListener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      esther: true,
    };
    // this.handleClick = this.handleClick.bind(this);
  }



  handleClick = () => {
    this.setState(prevState => ({
      esther: !prevState.esther
    }));
  }
  render() {
    const { name, age } = this.props

    return (
      <div>
        {this.state.esther && (
          <p className="text-center text-red-600">Modal is here</p>
        )}
        <button
          onClick={this.handleClick}
          className="mt-4 bg-slate-500  text-white py-2 px-4">
          {this.state.esther ? 'Hide modal' : 'show modal'}
        </button>
        <h2>name: {name}</h2>
        <p>age is: {age}</p>
      </div>
    );
  }
}
