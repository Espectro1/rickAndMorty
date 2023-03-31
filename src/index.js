import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Layout />} />
        </Route>
        <Route
          path="/characters"
          element={<Layout pageToRender={"characters"} />}
        />
        <Route
          path="characters/:id"
          element={<Layout pageToRender={"characters"} />}
        ></Route>
        <Route
          path="*"
          element={
            <main>
              <p>Ups, no se ha encontrado la pagina!</p>
            </main>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
