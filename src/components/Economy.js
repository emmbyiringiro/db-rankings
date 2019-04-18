import React, { Component } from "react";
import { RankingsConsumer } from "../rankingContext";

class Economy extends Component {
  state = {};

  // Helper function which replace
  //  object key undescore with space

  removeUndescore = criteria => {
    let result = String(criteria)
      .split("_")
      .join(" ");

    return result;
  };
  // Helper  function which traverse
  // object keys and values
  mapObject = (object, callback) => {
    return Object.keys(object).map((key, index) => {
      return callback(key, object[key], index);
    });
  };
  render() {
    return (
      <RankingsConsumer>
        {value => {
          const { starterEconomy } = value;
          return (
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="text-center regulation-handler current-regulation  font-weight-bold">
                    <h5 className="gont-weight-bold">Economy Scores</h5>
                  </div>

                  <div className="regulation-handler ">
                    <div className="row">
                      <div className="col-6 mx-auto align-content-center">
                        <h6 style={{ color: "var(--mainYellow)" }}>
                          {" "}
                          {starterEconomy.Economy}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-10">
                        {this.mapObject(
                          starterEconomy,
                          (property, value, index) => {
                            if (property !== "Economy") {
                              return (
                                <div key={index}>
                                  <span
                                    style={{
                                      fontSize: "0.9rem",
                                      fontWeight: "600"
                                    }}
                                  >
                                    {this.removeUndescore(property)}
                                  </span>
                                  <hr />
                                </div>
                              );
                            }
                          }
                        )}
                      </div>

                      <div className="col-2">
                        {this.mapObject(
                          starterEconomy,
                          (property, value, index) => {
                            if (property !== "Economy") {
                              return (
                                <div key={index}>
                                  <span
                                    style={{
                                      color: "var(--mainBlue)",
                                      fontSize: "0.9rem",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    {this.removeUndescore(value)}
                                  </span>
                                  <hr />
                                </div>
                              );
                            }
                          }
                        )}
                      </div>
                    </div>
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

export default Economy;
