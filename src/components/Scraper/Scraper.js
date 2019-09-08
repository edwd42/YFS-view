import React, { Component, createContext } from "react";
import Data from "./Data";
import Notes from "./Notes";
import Snapshot from "./Snapshot";
const ScraperContext = createContext(null);

class Scraper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchlist: ["empty"]
    };
  }

  render() {
    console.log(this.state.watchlist);

    const data = {
      name: "Me"
    };
    return (
      <ScraperContext.Provider value={data}>
        <p>I am the Scraper App. You have logged in to see me. Good job, Ed.</p>
        <Notes />
        <Snapshot />
      </ScraperContext.Provider>
    );
  }
}

export { Scraper as default, ScraperContext };
