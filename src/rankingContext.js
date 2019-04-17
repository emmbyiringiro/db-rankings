import React, { Component } from "react";
import { rankings } from "./js/rankings";

const RankingsContext = React.createContext();

class RankingsProvider extends Component {
  state = { rankings: rankings, activeRegulation: "Global Rank" };

  sortBy = criteria => {
    let tempRankings = this.state.rankings.sort((a, b) => {
      return a[criteria] - b[criteria];
    });
    this.setState(() => {
      return { rankings: tempRankings };
    });
  };

  setActiveRegulation = criteria => {
    this.setState(() => {
      return { activeRegulation: criteria };
    });
  };

  render() {
    return (
      <RankingsContext.Provider
        value={{
          ...this.state,
          sortBy: this.sortBy,
          setActiveRegulation: this.setActiveRegulation
        }}
      >
        {this.props.children}
      </RankingsContext.Provider>
    );
  }
}

const RankingsConsumer = RankingsContext.Consumer;

export { RankingsProvider, RankingsConsumer };
