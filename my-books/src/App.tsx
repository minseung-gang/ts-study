import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Signin from "./Pages/Signin";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import Notfound from "./Pages/Notfound";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Pages/Error";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/signin/*" element={<Signin />} />
          <Route path="/add/*" element={<Add />} />
          <Route path="/book/:id/*" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route element={<Notfound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
