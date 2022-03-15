import logo from "./logo.svg";
import "./App.css";
import response from "./sampleResponse";
import React, { useState, useEffect } from "react";


function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const hostingPath = "http://localhost:8080";
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  function onQueryChange(q) {
    setQuery(q);
    fetchSuggestions();
  }

  function fetchSuggestions() {
    fetch(`${hostingPath}/suggest?q=${query}`, fetchOptions)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setSuggestions(response.suggestionGroups[0].searchSuggestions);
      });
  }

  function onSuggestionClick(q) {
    console.log("q", q);
    setQuery(q);
    sendObj(q);
  }

  function sendObj(q) {
    setSuggestions([]);
    fetch(hostingPath + "/search?q=" + q, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setData(data.webPages.value);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const suggestionsComponent = () => {
    return (
      suggestions && suggestions.map(suggestion => {
        return (
          <p key={suggestion.displayText} onClick={() => onSuggestionClick(suggestion.displayText)}>{suggestion.displayText}</p>
        )
      })
    )
}

return (
  <div className="App">
    <header className="App-header"> Welcome
    </header>
    <div className="App-body">
      {/* <form className="form"> */}
      <input type="text" onChange={e => onQueryChange(e.target.value)} name="query" value={query} />

      {/* Suggestions */}
      {suggestionsComponent()}

      <input type="submit" value="Submit" onClick={() => sendObj(query)} />
      {/* </form> */}
      <div>
        <table border="2">
          <tbody>
            {data != "" ? data.map((item, i) => (
              <tr key={i}>
                <div>{item.name}</div>
                <div>{item.snippet}</div>
                <div><a href={item.url}>{item.url}</a></div>
                <div>---</div>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
}

export default App;
