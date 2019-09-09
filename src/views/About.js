import React from "react";
import "../App.css";

import SpringBootStack from "../assets/SpringBootStack.png";
import reactjs_logo from "../assets/reactjs_logo.png";
import java_logo from "../assets/java-logo.png";
import spring_logo from "../assets/spring-logo.png";
import mongodb_logo from "../assets/mongodb_logo.png";

const spanStyle = {
  fontWeight: "bold"
};

function about() {
  return (
    <>
      <p>About This Project</p>
      <div>
        <article>
          <h1>CareerDevs Capstone Scraper Project</h1>
          <p>
            <span style={spanStyle}>Main Task </span>
            <br />
            Build a Java scraper that will pull stock data from your personal
            Yahoo finance account. This application should store each scrape in
            a database so as to be able to retain a history of past scraped
            data. This scraper will include a web-based user facing interface,
            which pulls data from a RESTAPI as JSON data, where the user will be
            able to view the historic data, request a new scrape, and see the
            most recent scraped data as well.
          </p>
          <p>
            Following the MVC pattern (Model-View-Controller) I built this app
            using Java and Spring Boot for the controller, ReactJS for the view
            and MongoDB on the back-end.
          </p>
          <p>
            I wrote the view in ReactJS because it is fast, lightweight and
            portable. I also like JavaScript and want to learn React. Also, when
            building an app with the SpringMVC pattern, the view in JSP is
            tightly coupled to the controller, which is bad programming design.
            With React, code modules can be modified without affecting other
            code.
          </p>
        </article>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={reactjs_logo} alt="reactjs logo"></img>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={java_logo} alt="java logo" />
          </div>
          <div className="col">
            <img src={spring_logo} alt="spring logo"></img>
          </div>
          <div className="col">
            <img
              src={mongodb_logo}
              alt="mongodb logo"
              style={{ height: "50%", width: "75%" }}
            ></img>
          </div>
        </div>
        <hr />
        <p>The diagram below depicts controller and database layers.</p>
        <img src={SpringBootStack} alt="Spring Boot Stack"></img>
      </div>
    </>
  );
}

export default about;
