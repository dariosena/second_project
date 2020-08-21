import React from "react";

import Header from "./components/header";

function App() {
  return (
    <>
      <Header title="ReactJS">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="React Native">
      <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Links</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
