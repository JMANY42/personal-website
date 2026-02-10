import { HappyBirthdayMom, Home, AboutMe, Projects, Contact} from "./pages";

export const routes = [
  {path: "/", element: <Home /> },
  {path: "/happybirthdaymom", element: <HappyBirthdayMom /> },
  {path: "/about-me", element: <AboutMe /> },
  {path: "/projects", element: <Projects /> },
  { path: "/projects/:projectPath", element: <Projects />},
  { path: "/contact", element: <Contact />},
];