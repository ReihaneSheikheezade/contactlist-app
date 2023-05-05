import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddContact from "./Pages/AddContact";
import ContactList from "./Pages/ContactList";
import ContactDetail from "./Pages/ContactDetail";
import Layout from "./Layout/Layout";
import EditContact from "./Pages/EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddContact />,
  },
  {
    path: "/contactlist",
    element: <ContactList />,
  },
  {
    path: "/contact/:id",
    element: <ContactDetail />,
  },
  {
    path: "/edit/:id",
    element: <EditContact />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);


