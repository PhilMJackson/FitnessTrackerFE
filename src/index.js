import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <Router>
    <Main />
  </Router>
);
