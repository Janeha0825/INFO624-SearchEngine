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
    var q = document.getElementById("q");
    console.log(q.value);
    const result =  response.webPages.value;
    setData(result);
  }

  function sendObj() {
    
    var q = document.getElementById("q").value;
    let hostingPath = "http://localhost:8080/"
    const data = { q: q };
    console.log(hostingPath + "search?q=" + q)
    fetch(hostingPath + "search?q=" + q, {
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
  
  return (
    <div className="App">
      <header className="App-header"> Welcome
      </header>
      <div className="App-body">
        {/* <form className="form"> */}
          <input type="text" name="query" id="q"/>
          <input type="submit" value="Submit" onClick={sendObj}/>
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
              ) ) : null}
            </tbody>
          </table>
          </div>
        </div>
    </div>
  );
}

export default App;
