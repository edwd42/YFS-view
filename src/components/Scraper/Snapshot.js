// @ts-nocheck
import React from "react";
import "../../App.css";
import { ScraperContext } from "./Scraper";

const leftAlign = { textAlign: "left" };
const collapse = { visibility: "collapse" };
const caption = {
  width: "100%",
  margin: "auto",
  backgroundColor: "lightsteelblue",
  padding: "12px 32px",
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center"
};

const Snapshot = () => (
  <ScraperContext.Consumer>
    {data => (
      <React.Fragment>
        {Object.values(
          data.previousScrape.length === 0
            ? data.newScrape
            : data.previousScrape
        ).map((wl, i) => {
          let date = new Date(wl.timeStamp);
          console.log(i);
          if (i === 0) {
            return (
              <>
                <caption style={caption}>
                  Time Stamp for this scrape:&nbsp;
                  {new Date(date).toLocaleString()}
                </caption>
                <table className="table">
                  <thead>
                    <tr>
                      <th style={leftAlign}>Symbol</th>
                      <th>Last Price</th>
                      <th>Todays Change</th>
                      <th>&nbsp;Volume</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={i}>
                      <td style={leftAlign}>{wl.symbol}</td>
                      <td>{parseFloat(wl.lastPrice).toFixed(2)}</td>
                      <td>{wl.todaysChange}</td>
                      <td>&nbsp;{parseFloat(wl.volume).toFixed(2)}</td>
                      <td>{parseFloat(wl.marketCap).toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          } else {
            return (
              <table className="table">
                <thead style={collapse}>
                  <tr>
                    <th style={leftAlign}>Symbol</th>
                    <th>Last Price</th>
                    <th>Todays Change</th>
                    <th>&nbsp;Volume</th>
                    <th>Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={i}>
                    <td style={leftAlign}>{wl.symbol}</td>
                    <td>{parseFloat(wl.lastPrice).toFixed(2)}</td>
                    <td>{wl.todaysChange}</td>
                    <td>&nbsp;{parseFloat(wl.volume).toFixed(2)}</td>
                    <td>{parseFloat(wl.marketCap).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            );
          }
        })}
      </React.Fragment>
    )}
  </ScraperContext.Consumer>
);

export default Snapshot;
