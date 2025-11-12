// src/App.tsx
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

// Remove AppRoutes component from this file and place it in src/AppRoutes.tsx
