import React from "react";
import ReactDOM from "react-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
