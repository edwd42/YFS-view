// import React from "react";
// import axios from "axios";
import $ from "jquery";

class Data {
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
    let priorScrape = [];
    try {
      if (watchlist) {
        for (let i = 0; i < watchlist.length; i++) {
          if (watchlist[i].timeStamp === previousScrape) {
            priorScrape.push(watchlist[i]);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
    return priorScrape;
  }

  makeTimeStampSet(watchlist) {
    let snapshotSet = new Set();

    for (let i in watchlist) {
      snapshotSet.add(watchlist[i].timeStamp);
    }

    return snapshotSet;
  }
}

export default new Data();
