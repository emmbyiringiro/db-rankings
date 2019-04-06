import React, { Component } from "react";
import { RankingsConsumer } from "../rankingContext";

class RegulationDetails extends Component {
  state = {};

  render() {
    return (
      <RankingsConsumer>
        {value => {
          const rankings = value.rankings;
          const currentRegulation = value.currentRegulation;

          return (
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="text-center regulation-handler current-regulation font-weight-bold">
                    <h5>{currentRegulation}</h5>
                  </div>
                  <div className="regulation-handler scroll ">
                    <ul>
                      {rankings.map((element, index) => {
                        return (
                          <React.Fragment key={index}>
                            <li>
                              {" "}
                              {index + 1} - {element.Economy}
                            </li>
                            <hr />
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </RankingsConsumer>
    );
  }
}

export default RegulationDetails;
