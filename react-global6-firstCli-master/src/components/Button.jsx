import { Component } from "react";

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      modal: true,
    };
  }

  // button

  handleShow() {}

  render() {
    const { text, color } = this.props;
    return (
      <div>
        {this.state.modal ? (
          <p className="text-center text-sky-700">MODAL SHOW</p>
        ) : (
          ""
        )}
        <p className="text-center text-sky-700">MODAL SHOW</p>
        <button className={`bg-${color}-500 text-white rounded p-3 text-sm`}>
          {text}
        </button>
      </div>
    );
  }
}
