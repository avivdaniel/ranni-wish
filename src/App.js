import React, { useEffect, useState } from "react";
import "./App.scss";

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App container">
      <div
        className={["balloon", clicked ? "fly" : "balloon"]
          .filter(Boolean)
          .join(" ")}
      ></div>
      <h1>
        On 11.1 we all will release up a ballow in memory of Ranni and raising
        awareness to genetic and metabolic diseases.
      </h1>
      <h2>Take a part and:</h2>

      <div className="btn-container">
        <button
          className="action-button shadow animate"
          onClick={() => setClicked(!clicked)}
        >
          Release up a ballon
        </button>
      </div>
    </div>
  );
}
