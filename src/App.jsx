import React from "react";
import Child from "./Child";
import './App.css'; // Import the external CSS file

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Child />
      </div>
    );
  }
}

export default App;
