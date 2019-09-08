import React, { Component, createContext } from "react";
import Notes from "./Notes";
import Snapshot from "./Snapshot";
const ScraperContext = createContext(null);

class Scraper extends Component {
  render() {
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
