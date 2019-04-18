import React from "react";
import styled from "styled-components";
import { RankingsConsumer } from "../rankingContext";

function Regulation({ regulation }) {
  return (
    <RankingsConsumer>
      {value => {
        const { sortBy, setActiveRegulation } = value;
        // Utility function to replace whites spaces with
        // undescore ("_")
        const rankRegulationsBy = criteria => {
          // regulation title contain white spaces
          // replace them with undescore ("_") and pass by
          // as query string sorting criteria
          criteria = criteria.split(" ").join("_");
          sortBy(criteria);
        };

        return (
          <RegWraper>
            <div className="row">
              <div
                onClick={e => {
                  let regulation = e.currentTarget.textContent;
                  // Rank by selected regulation
                  rankRegulationsBy(regulation);
                  // update Active regulation
                  setActiveRegulation(regulation);
                }}
                className="col-12 mx text-left p-2 mx-3 "
              >
                {regulation}
              </div>
            </div>
          </RegWraper>
        );
      }}
    </RankingsConsumer>
  );
}

export default Regulation;

export const RegWraper = styled.div`
  border-bottom: 0.08rem solid var(--outline);
  color: var(--lightBlue);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.7s ease-in-out;

  &:hover {
    color: var(--mainYellow);
  }
`;
