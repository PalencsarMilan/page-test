import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [eredmeny, setEredmeny] = useState("");
  const [elso, setElso] = useState(0);
  const [masodik, setMasodik] = useState(0);
  const [muvelet, setMuvelet] = useState("+");

  const onBtnClick = () => {
    if (muvelet === "+") {
      setEredmeny(`${elso + masodik}`);
    } else if (muvelet === "-") {
      setEredmeny(`${elso - masodik}`);
    } else if (muvelet === "/") {
      setEredmeny(`${elso / masodik}`);
    } else if (muvelet === "*") {
      setEredmeny(`${elso * masodik}`);
    }
  };

  return (
    <div className="App">
      <input
        type="number"
        placeholder="Add meg az elso szamot"
        onChange={(e) => setElso(Number(e.target.value))}
      />
      <select onChange={(e) => setMuvelet(e.target.value)}>
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
        <option value={"/"}>/</option>
        <option value={"*"}>*</option>
      </select>
      <input
        type="number"
        placeholder="Add meg az masodik szamot"
        onChange={(e) => setMasodik(Number(e.target.value))}
      />
      
      <p>{"="}{eredmeny}</p>
      <button onClick={onBtnClick}>Szamol</button>
    </div>
  );
}

export default App;
