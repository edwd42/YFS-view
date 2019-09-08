import React from "react";
// import axios from "axios";
// import $ from "jquery";
// import { createContext } from "react";
export const DataContext = React.createContext(null);

class Data {
  constructor(props) {
    // super(props);
    this.state = {
      priorScrape: null
    };
  }
  makeNewScrape(watchlist) {
    var newest = this.makeTimeStampSet(watchlist);
    newest = Math.max(...newest);
    let newScrape = [];
    try {
      if (watchlist) {
        for (let i = 0; i < watchlist.length; i++) {
          if (watchlist[i].timeStamp === newest) {
            newScrape.push(watchlist[i]);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
    return newScrape;
  }

  makePreviousScrape(previousScrape, watchlist) {
    console.log(previousScrape);
    console.log(watchlist);
    let priorScrape = [];
    try {
      if (watchlist) {
        for (let i = 0; i < watchlist.length; i++) {
          if (watchlist[i].timeStamp == previousScrape) {
            priorScrape.push(watchlist[i]);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
    console.log(priorScrape);
    return priorScrape;
  }
  makeTimeStampSet(watchlist) {
    let snapshotSet = new Set();
    for (let i in watchlist) {
      snapshotSet.add(watchlist[i].timeStamp);
    }
    return snapshotSet;
  }

  render() {
    return (
      <DataContext.Provider
        value={this.state.priorScrape}
      ></DataContext.Provider>
    );
  }
}

export default new Data();
// export { Data as default, DataContext };
