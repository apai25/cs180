import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Proj01 from "./components/projects/proj01/Proj01";
import Proj02 from "./components/projects/proj02/Proj02";
import Proj03 from "./components/projects/proj03/Proj03";
import Proj04 from "./components/projects/proj04/Proj04";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/proj01" element={<Proj01 />} />
        <Route path="/proj02" element={<Proj02 />} />
        <Route path="/proj03" element={<Proj03 />} />
        <Route path="/proj04" element={<Proj04 />} />
      </Routes>
    </Router>
  );
};

export default App;
