import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import RuleEditor from "./containers/RuleEditor";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rule Editor</h1>
        <RuleEditor />
      </header>
    </div>
  );
}

export default App;
