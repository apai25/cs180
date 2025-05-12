import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import CS280Final from "./components/projects/cs280-final/CS280Final";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cs280-final" element={<CS280Final />} />
      </Routes>
    </Router>
  );
};

export default App;
