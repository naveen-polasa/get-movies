import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Movie/:id" element={<MoviePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
