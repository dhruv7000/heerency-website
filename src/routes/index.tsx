import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import SiteLayout from "../layouts/SiteLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Home from "../pages/Home";
import ProjectsPage from "../pages/ProjectsPage";
import ServicesPage from "../pages/ServicesPage";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
