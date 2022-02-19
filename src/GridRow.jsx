import React from "react";

class GridRow extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="grid-row">
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
        </div>
      </>
    );
  }
}
