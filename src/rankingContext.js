import React, { Component } from "react";
import { rankings } from "./js/rankings";

const RankingsContext = React.createContext();

class RankingsProvider extends Component {
  state = { rankings: rankings, currentRegulation: "Global Rank" };

  sortedRankings = criteria => {
    let tempRankings = this.state.rankings.sort((a, b) => {
      return a[criteria] - b[criteria];
    });
    this.setState(() => {
      return { rankings: tempRankings };
    });
  };

  setCurrentRegulation = criteria => {
    this.setState(() => {
      return { currentRegulation: criteria };
    });
  };

  render() {
    return (
      <RankingsContext.Provider
        value={{
          ...this.state,
          sortedRankings: this.sortedRankings,
          setCurrentRegulation: this.setCurrentRegulation
        }}
      >
        {this.props.children}
      </RankingsContext.Provider>
    );
  }
}

const RankingsConsumer = RankingsContext.Consumer;

export { RankingsProvider, RankingsConsumer };
