import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Proj01 from "./components/projects/proj01/Proj01";
import Proj02 from "./components/projects/proj02/Proj02";

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/proj01" element={<Proj01 />} />
        <Route path="/proj02" element={<Proj02 />} />
      </Routes>
    </Router>
  );
};

export default App;
