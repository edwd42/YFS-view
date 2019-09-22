import React from "react";

export const DataContext = React.createContext(null);

class Data {
  constructor() {
    // super() is only valid inside a class constructor of a subclass.
    // this class Data is not a subclass of React.Component
    // super(props);
    this.state = {
      priorScrape: null
    };
  }

  makeNewScrape(watchlist) {
    var newest = this.makeTimeStampSet(watchlist);
    let newestTs = Math.max(...newest);
    let newScrape = [];
    try {
      if (watchlist) {
        for (let i = 0; i < watchlist.length; i++) {
          if (watchlist[i].timeStamp === newestTs) {
            newScrape.push(watchlist[i]);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
    return newScrape;
  }

  makePreviousScrape(priorScrapeTs, watchlist) {
    console.log(priorScrapeTs);
    console.log(watchlist);
    let previousScrapeArr = [];
    let counter = 0;
    try {
      if (watchlist) {
        for (let i = 0; i < watchlist.length; i++) {
          if (watchlist[i].timeStamp === parseInt(priorScrapeTs)) {
            previousScrapeArr.push(watchlist[i]);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
    console.log(previousScrapeArr);
    return previousScrapeArr;
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
