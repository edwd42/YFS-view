import axios from "axios";
import $ from "jquery";
import React, { Component, createContext } from "react";
// import Notes from "./Notes";
import Dashboard from "./Dashboard";
import Data from "./Data";
import Snapshot from "./Snapshot";

const ScraperContext = createContext(null);

class Scraper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchlist: [""],
      loading: false,
      previousScrapeTs: null
    };

    this.handleClickNewScrape = this.handleClickNewScrape.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.setState(() => {
      return { watchlist: this.findAllStocks() };
    });
  }

  async handleClickNewScrape() {
    this.setState({
      previousScrapeTs: null,
      loading: true
    });
    try {
      // let response = await axios.get(`http://localhost:8081/scrape`);
      // https://code4developers.com/cors-anywhere/
      let response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://yahoo-scraper-0.herokuapp.com/scrape`
      );

      if (response) {
        this.setState({ watchlist: response.data });
        await this.findAllStocks();
      }
    } catch (err) {
      console.log(err);
    }

    this.setState({
      previousScrapeTs: null,
      loading: false
    });
    console.log(this.state.loading);
    Data.makeNewScrape(this.state.watchlist);
  }

  onSelect(e) {
    e.preventDefault();
    console.log(this.state.previousScrapeTs);
    console.log(e.target.value);
    this.setState({ previousScrapeTs: e.target.value });
    console.log(this.state.previousScrapeTs);
    // hooks can only be called from within a function component
    // const value = useContext(DataContext);
    // this.setState({ previousScrapeTs: value });
    return this.state.previousScrapeTs;
  }

  findAllStocks() {
    $.ajax({
      // url: "http://localhost:8081/rest/api/findAllStocks/",
      url:
        "https://cors-anywhere.herokuapp.com/https://yahoo-scraper-0.herokuapp.com/rest/api/findAllStocks/",
      // auth0.com blog on cors
      // https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
      // headers: {
      //   "Content-Type": "application/json"
      // },
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
    console.log(this.state.previousScrapeTs);
    console.log(this.state.watchlist);
    let newScrape = Data.makeNewScrape(this.state.watchlist);
    let previousScrapeArr = Data.makePreviousScrape(
      this.state.previousScrapeTs,
      this.state.watchlist
    );
    let timeStampSet = Data.makeTimeStampSet(this.state.watchlist);
    let loading = this.state.loading;

    const data = {
      name: "Me",
      watchlist: this.state.watchlist,
      newScrape: newScrape,
      previousScrapeArr: previousScrapeArr,
      handleClickNewScrape: () => {
        this.handleClickNewScrape();
      },
      onSelect: e => {
        this.onSelect(e);
      },
      values: [...timeStampSet.values()],
      // formatDate: epochTime => {
      //   formatDate(epochTime);
      // },
      loading: loading
    };
    // console.log(data.watchlist);
    return (
      <ScraperContext.Provider value={data}>
        {this.props.children}
        <p>
          This is the Scraper App. You have logged in to see me. Good job, Ed.
        </p>
        <Dashboard />
        <Snapshot />
      </ScraperContext.Provider>
    );
  }
}

export { Scraper as default, ScraperContext };
