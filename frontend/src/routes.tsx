import { HappyBirthdayMom, Home, AboutMe, Projects} from "./pages";

export const routes = [
  {path: "/", element: <Home /> },
  {path: "/happybirthdaymom", element: <HappyBirthdayMom /> },
  {path: "/about-me", element: <AboutMe /> },
  {path: "/projects", element: <Projects /> },
];