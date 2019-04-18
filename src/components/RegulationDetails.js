import React from "react";
import { RankingsConsumer } from "../rankingContext";

function RegulationDetails() {
  return (
    <RankingsConsumer>
      {value => {
        const { activeRegulation, getEconomyDetails, rankings } = value;

        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="text-center regulation-handler current-regulation font-weight-bold">
                  <h5>{activeRegulation}</h5>
                </div>
                <div className="regulation-handler scroll ">
                  <ul>
                    {rankings.map((element, index) => {
                      return (
                        <React.Fragment key={index}>
                          <li
                            onClick={() => {
                              let globalRank = element.Global_Rank;

                              getEconomyDetails(globalRank);
                            }}
                          >
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

export default RegulationDetails;
