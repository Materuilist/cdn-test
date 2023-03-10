import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

window.renderSideApp = function (containerId, userName) {
  const sideRoot = ReactDOM.createRoot(document.getElementById(containerId));

  sideRoot.render(
    <React.StrictMode>
      <App name={userName} />
    </React.StrictMode>
  );
};

window.renderSideApp("root", 'boba');
