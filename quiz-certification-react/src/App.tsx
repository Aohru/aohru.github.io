import "bootstrap/dist/css/bootstrap.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import QuizMakerPage from "./ts/pages/QuizMakerPage";
import { QuizResultsPage } from "./ts/pages/QuizResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path=""  element={<QuizMakerPage />} />
        <Route path="/results" element={<QuizResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
