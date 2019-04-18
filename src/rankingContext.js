import React, { Component } from "react";
import { rankings, starterEconomy } from "./js/rankings";

const RankingsContext = React.createContext();

class RankingsProvider extends Component {
  state = {
    rankings: rankings,
    activeRegulation: "Global Rank",
    starterEconomy
  };

  // Sort countries by  regulation indicator
  sortBy = criteria => {
    let tempRankings = this.state.rankings.sort((a, b) => {
      return a[criteria] - b[criteria];
    });
    this.setState(() => {
      return { rankings: tempRankings };
    });
  };

  // set active regulation
  setActiveRegulation = criteria => {
    this.setState(() => {
      return { activeRegulation: criteria };
    });
  };

  // Get economy scores for all regulation indicators
  getEconomyDetails = globalRank => {
    const selectedEconomy = rankings.find(
      economy => economy.Global_Rank === globalRank
    );
    this.setState({ starterEconomy: selectedEconomy });
  };

  render() {
    return (
      <RankingsContext.Provider
        value={{
          ...this.state,
          sortBy: this.sortBy,
          setActiveRegulation: this.setActiveRegulation,
          getEconomyDetails: this.getEconomyDetails
        }}
      >
        {this.props.children}
      </RankingsContext.Provider>
    );
  }
}

const RankingsConsumer = RankingsContext.Consumer;

export { RankingsProvider, RankingsConsumer };
