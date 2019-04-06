import React from "react";
import RegulationsHandler from "./RegulationsHandler";
import RegulationDetails from "./RegulationDetails";
import Info from "./Info";

function RegulationWraper() {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-lg-4 col-sm-12 mx-auto my-3 ">
          <RegulationsHandler />
        </div>
        <div className="col-lg-4  col-sm-12 my-3">
          <RegulationDetails />
        </div>
        <div className="col-lg-4 mx-auto col-sm-12 my-3">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default RegulationWraper;
