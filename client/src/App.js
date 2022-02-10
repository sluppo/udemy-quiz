import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [response, setResponse] = useState("No response yet.");
  const [dbConnection, setDbConnection] = useState("");

  useEffect(() => {
    fetch("http://localhost:9000/demoAPI")
      .then((res) => res.text())
      .then((res) => setResponse(res));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/testDB")
      .then((res) => res.text())
      .then((res) => setDbConnection(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{response}</p>
        <p>{dbConnection}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
