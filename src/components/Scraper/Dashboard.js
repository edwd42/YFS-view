// @ts-nocheck
import React from "react";
import "../../App.css";
import { ScraperContext } from "./Scraper";

const Dashboard = props => (
  <ScraperContext.Consumer>
    {data => (
      <React.Fragment>
        <div>
          <div>
            <p>
              <button
                className="button"
                onClick={data.handleClickNewScrape}
                disabled={data.loading}
              >
                {data.loading && (
                  <i className="fas fa-sync" style={{ marginRight: "5px" }} />
                )}
                {data.loading && <span>Loading Data</span>}
                {!data.loading && <span>New Scrape</span>}
              </button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <select
                value={data.value}
                onChange={event => data.onSelect(event)}
              >
                <option selected="selected">Previous Scrapes</option>
                {data.values.map(item => (
                  <option key={item} value={item}>
                    {new Date(item).toLocaleString()}
                  </option>
                ))}
              </select>
            </p>
          </div>
        </div>
      </React.Fragment>
    )}
  </ScraperContext.Consumer>
);

export default Dashboard;
