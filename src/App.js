import React from "react";
import { Navbar } from "./components/Navbar";
import { SearchBox } from "./components/SearchBox";
import { Items } from "./components/Items";
function App() {
  return (
    <>
      <Navbar />
      <SearchBox />
      <Items />
    </>
  );
}

export default App;
