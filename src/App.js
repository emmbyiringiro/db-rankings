import React, { Component } from "react";

//css styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Components
import Header from "./components/Header";
import RegulationWraper from "./components/RegulationsWraper";
//Application data context provider
import { RankingsProvider } from "./rankingContext";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RankingsProvider>
          <Header />
          <RegulationWraper />
        </RankingsProvider>
      </React.Fragment>
    );
  }
}

export default App;
