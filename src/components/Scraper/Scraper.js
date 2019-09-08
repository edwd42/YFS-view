import React, { Component, createContext } from "react";

const AppContext = createContext(null);

class Scraper extends Component {
  render() {
    const data = {
      name: "Me"
    };
    return (
      <AppContext.Provider value={data}>
        <div>
          <p>
            I am the Scraper App. You have logged in to see me. Good job, Ed.
          </p>
          <p>
            <ol>
              <li>
                Temporarily moved Scraper component from PrivateRoute to Route
                (in App.js) for dev. Put back to PrivateRoute after dev and
                test.
              </li>
              <li>
                Scraper class holds a reference to the data, and passes it to
                Snapshot.js via Context API.
              </li>
              <li>
                Add AppContext.Provider to Scraper and AppContext.Consumer to
                Snapshot and pass const data to Consumer
              </li>
            </ol>
          </p>
        </div>
      </AppContext.Provider>
    );
  }
}

export default Scraper;
