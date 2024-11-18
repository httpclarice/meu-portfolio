import { AboutUs } from "../pages/AboutUs";
import { Home } from "../pages/Home";
import { Project } from "../pages/Project";
import { Service } from "../pages/Service";
import { Header } from "../shared/components/Header";

export const routes = [
  {
    path: "/",
    element: (
      <Header
        options={[
          { path: "/", text: "Início" },
          { path: "aboutus", text: "Sobre" },
          { path: "services", text: "Serviços" },
          { path: "projects", text: "Projetos" },
          { text: "Contato" },
        ]}
      />
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "services",
        element: <Service />,
      },
    ],
  },
];
