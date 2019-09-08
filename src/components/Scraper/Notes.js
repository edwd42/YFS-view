import React from "react";

const Notes = () => {
  return (
    <div>
      <span>Now, to load the Snapshot of scraped data...</span>
      <ol>
        <li>
          Temporarily moved Scraper component from PrivateRoute to Route (in
          App.js) for dev. Put back to PrivateRoute after dev and test.
        </li>
        <li>
          Scraper class holds a reference to the data, and passes it to
          Snapshot.js via Context API.
        </li>
        <li>
          Snapshot should load automatically after Scraper gets data from REST
          API
        </li>
        <li>
          Add AppContext.Provider to Scraper and AppContext.Consumer to Snapshot
          and pass const data to Consumer
        </li>
      </ol>
    </div>
  );
};

export default Notes;
