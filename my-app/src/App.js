import "./App.css";
import React, { useState, useEffect } from "react";


function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [spellCheck, setSpellCheck] = useState([]);

  const hostingPath = "http://localhost:8080";
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  function onQueryChange(q) {
    setQuery(q)
   
  }
  useEffect(() => {
    fetchSpellCheck();
    fetchSuggestions();
  }, [query])


  function fetchSuggestions() {
    fetch(`${hostingPath}/suggest?q=${query}`, fetchOptions)
      .then(response => response.json())
      .then(response => {
        setSuggestions(response?.suggestionGroups && response?.suggestionGroups.length > 0 ? response?.suggestionGroups[0]?.searchSuggestions : []);
      });
  }

  function fetchSpellCheck() {
    fetch(`${hostingPath}/spellcheck?q=${query}`, fetchOptions)
      .then(response => response.json())
      .then(response => {
        setSpellCheck(response?.flaggedTokens?.suggestions ? response?.flaggedTokens?.suggestions : [] )
      });
  }

  function onSuggestionClick(q) {
    setQuery(q);
    sendObj(q);
  }

  function onSpellCheckClick(q) {
    setQuery(q);
    sendObj(q);

  }

  function sendObj(q) {
    setSuggestions([]);
    setSpellCheck([]);

    fetch(hostingPath + "/search?q=" + q, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data.webPages.value);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const suggestionsComponent = () => {
    return (
      query !== "" && suggestions && suggestions.map(suggestion => {
        return (
          <p key={suggestion.displayText} onClick={() => onSuggestionClick(suggestion.displayText)}>{suggestion.displayText}</p>
        )
      })
    )
}
const spellCheckComponent = () => {
  return (
    query !== "" && spellCheck && spellCheck.map(item => {
      return (
        <p key={item.suggestion} onClick={() => onSpellCheckClick(item.suggestion)}>{item.suggestion}</p>
      )
    })
  )
}

return (
  <div className="App">
    <header className="App-header"> Welcome
    </header>
    <div className="App-body">
      <input type="text" onChange={e => onQueryChange(e.target.value)} name="query" value={query} />

      <input type="submit" value="Submit" onClick={() => sendObj(query)} />
      {spellCheckComponent()}
      {suggestionsComponent()}
      <div>
        <table border="2">
          <tbody>
            {query !== "" && data !== "" ? data.map((item, i) => (
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
