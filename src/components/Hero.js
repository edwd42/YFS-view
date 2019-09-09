import React from "react";

import logo from "../assets/logo.svg";
import yahoo_finance from "../assets/yahoo_finance.png";

const Hero = () => (
  <div className="text-center hero my-5">
    {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
    <h1 className="mb-4">CareerDevs Capstone Scraper Project - MVP</h1>

    {/* <p className="lead"> */}
    <div className="flex-container">
      <div id="article">
        <article>
          <p>
            <em>
              A CareerDevs web scraper project demonstrating basic principles of
              web scraping.&nbsp;&nbsp;
            </em>
            With a made up Yahoo Finance portfolio of 10 stocks, I implement
            several web technologies, frameworks and libraries including Java,
            Selenium and Spring Boot to scrape data from Yahoo Finance and
            display it to the user. Design Patterns guided my development
            process, including Singleton Pattern, Factory Pattern and State
            Pattern adapted from the book Design Patterns - Elements of Reusable
            Object-oriented Software, by Gang of Four, 1994.
          </p>
        </article>
      </div>
      <div id="img">
        <img src={yahoo_finance} alt="Yahoo Finance Watchlist Page" />
      </div>
    </div>
    {/* </p> */}
  </div>
);

export default Hero;
