import React, { Component, createContext } from "react";
import Data from "./Data";
// import Notes from "./Notes";
import Dashboard from "./Dashboard";
import Snapshot from "./Snapshot";
import $ from "jquery";
import axios from "axios";

const ScraperContext = createContext(null);

class Scraper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchlist: ["mt"]
    };

    this.handleClickNewScrape = this.handleClickNewScrape.bind(this);
  }

  componentDidMount() {
    this.setState(() => {
      return { watchlist: this.findAllStocks() };
    });
  }

  async handleClickNewScrape() {
    this.setState({
      previousScrape: null,
      loading: true
    });
    try {
      let response = await axios.get(`http://localhost:8081/scrape`);
      if (response) {
        this.setState({ watchlist: response.data });
        await this.findAllStocks();
      }
    } catch (err) {
      console.log(err);
    }

    this.setState({
      previousScrape: null,
      loading: false
    });
    console.log(this.state.loading);
    let newScrape = Data.makeNewScrape(this.state.watchlist);
  }

  findAllStocks() {
    $.ajax({
      url: "http://localhost:8081/rest/api/findAllStocks/",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({
          watchlist: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("err " + err);
        console.log("status " + status);
        console.log("xhr.response " + xhr.responseText);
      }
    });
  }

  render() {
    let newScrape = Data.makeNewScrape(this.state.watchlist);
    let previousScrape = Data.makePreviousScrape(
      this.state.previousScrape,
      this.state.watchlist
    );
    let timeStampSet = Data.makeTimeStampSet(this.state.watchlist);

    const data = {
      name: "Me",
      watchlist: this.state.watchlist,
      newScrape: newScrape,
      previousScrape: previousScrape,
      handleClickNewScrape: () => {
        this.handleClickNewScrape();
      },

      values: [...timeStampSet.values()],
      formatDate: epochTime => {
        this.formatDate(epochTime);
      }
    };
    // console.log(data.watchlist);
    return (
      <ScraperContext.Provider value={data}>
        {this.props.children}
        <p>I am the Scraper App. You have logged in to see me. Good job, Ed.</p>
        {/* <Notes /> */}
        <Dashboard />
        <Snapshot />
      </ScraperContext.Provider>
    );
  }
}

export { Scraper as default, ScraperContext };
