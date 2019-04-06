import React, { Component } from "react";
import Regulation from "./Regulation";

class RegulationsHandler extends Component {
  regulations = [
    "Global Rank",
    "Dealing with Construction Permits",
    "Getting Electricity",
    "Registering Property",
    "Getting Credit",
    "Protecting Minority Investors",
    "Paying Taxes",
    "Trading across Borders",
    "Enforcing Contracts",
    "Resolving Insolvency"
  ];
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-12  py-3 regulation-handler  regulation-menu">
            <nav className="nav-navbar">
              {this.regulations.map((regulation, index) => {
                return <Regulation regulation={regulation} key={index} />;
              })}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default RegulationsHandler;
