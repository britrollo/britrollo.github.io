import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ErrorPage from "./routes/error-page.js";
import ResumeRoute from "./routes/resume.js";
import EducationRoute from './routes/education';
import SkillsRoute from './routes/skills';
// import reportWebVitals from './reportWebVitals'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/resume/",
        element: <ResumeRoute />,
      },
      {
        path: "/education/",
        element: <EducationRoute />,
      },
      {
        path: "/skills/",
        element: <SkillsRoute />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
