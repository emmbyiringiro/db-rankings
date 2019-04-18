import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 mx-auto text-center font-weight-bold primary-header px-4 py-3  ">
            <h2 className=" ">How doing business easy by world economies</h2>
            <h5>
              Comparing Business Regulation for Domestic Firms in{" "}
              <span style={{ color: " #feb713" }}>190 Economies</span>
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
