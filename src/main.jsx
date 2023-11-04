import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import { StorageProvider } from "./lib/Storage";

import Layout from "./layout/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StorageProvider>
    <Layout />
  </StorageProvider>
)