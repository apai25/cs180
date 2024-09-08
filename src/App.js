import React from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Proj01 from "./components/projects/proj01/Proj01";

// App Component
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/cs180" element={<Home />} />
        <Route path="/cs180/proj01" element={<Proj01 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
