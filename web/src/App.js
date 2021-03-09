import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./page/HomePage";
function App() {
  return (
      <Route path="/">
          <HomePage />
      </Route>
  );
}
export default App;