import logo from "./logo.svg";
import "./App.css";
import response from "./sampleResponse";
import React, { useState, useEffect } from "react";


function App() {

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const result =  response.webPages.value;
  //   setData(result);
  // })


  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit");
    //set data here
    const result =  response.webPages.value;
    setData(result);
  }
  
  return (
    <div className="App">
      <header className="App-header"> Welcome
      </header>
      <div className="App-body">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="query" />
          <input type="submit" value="Submit" />
        </form>
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
              ) ) : null}
            </tbody>
          </table>
          </div>
        </div>
    </div>
  );
}

export default App;
