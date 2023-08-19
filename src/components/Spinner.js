import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <div class="spinner-border " role="status">
          <span class="sr-only my-3"></span>
        </div>
      </div>
    );
  }
}

export default Spinner;
