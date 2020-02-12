import React from "react";
import "./styles.css";

const api = {
  key: "125341081fd5141173ae5f974808f923",
  base: "https://api.openweathermap.org/data/2.5"
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
