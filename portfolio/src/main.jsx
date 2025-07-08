import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Skill from './components/Skill.jsx';
import { ToastContainer } from 'react-toastify';

const HomePage = () => (
  <>
    <ToastContainer />
    <Navbar />
    <Home />
    <About />
    <Skill />
    <Service />
    <Contact />
    <Footer />
  </>
);

const AboutPage = () => (
  <>
    <Navbar />
    <About />
  </>
);

const SkillPage = () => (
  <>
    <Navbar />
    <Skill />
  </>
);

const ServicePage = () => (
  <>
    <Navbar />
    <Service />
  </>
);

const ContactPage = () => (
  <>
    <Navbar />
    <Contact />
  </>
);

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/skills", element: <SkillPage /> },
  { path: "/service", element: <ServicePage /> },
  { path: "/contact", element: <ContactPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
