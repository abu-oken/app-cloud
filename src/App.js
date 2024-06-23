import React, { useState, useEffect } from "react";
import CRM from "./components/crm.js";
import ERP from "./components/erp.js";
import WMS from "./components/wms.js";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => setData(response.message))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Cloud App</h1>
        <nav>
          <ul>
            <li>
              <a href="#crm">CRM</a>
            </li>
            <li>
              <a href="#erp">ERP</a>
            </li>
            <li>
              <a href="#wms">WMS</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="crm">
          <CRM />
        </section>
        <section id="erp">
          <ERP />
        </section>
        <section id="wms">
          <WMS />
        </section>
      </main>
    </div>
  );
}

export default App;
