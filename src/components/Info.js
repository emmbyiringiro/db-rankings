import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="text-center regulation-handler current-regulation  font-weight-bold">
              <h5>Why Rankings</h5>
            </div>
            <div className="regulation-handler ">
              <p>
                Doing Business 2019 is the 16th in a series of annual reports
                investigating the regulations that enhance business activity and
                those that constrain it. Doing Business presents quantitative
                indicators on business regulation and the protection of property
                rights that can be compared across 190 economies—from
                Afghanistan to Zimbabwe—and over time....{" "}
                <span>
                  {" "}
                  <a href="http://www.doingbusiness.org/">
                    Read more about Project
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
