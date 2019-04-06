import React from "react";
import styled from "styled-components";
import { RankingsConsumer } from "../rankingContext";

function Regulation({ regulation }) {
  return (
    <RankingsConsumer>
      {value => {
        let sortedRankings = value.sortedRankings;
        let setCurrentRegulation = value.setCurrentRegulation;

        return (
          <RegWraper>
            <div className="row">
              <div
                onClick={e => {
                  let regulationText = e.currentTarget.textContent;
                  regulationText = regulationText.split(" ").join("_");
                  sortedRankings(regulationText);
                  setCurrentRegulation(regulationText.split("_").join(" "));
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
