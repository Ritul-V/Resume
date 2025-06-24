import Home from "./pages/home";

const routes = {
  homepage: "/",
  portfoliopage: "/portfolio",
  all: "*",
};

const getRoutes = () => [
  {
    path: routes.homepage,
    element: <Home />,
  },
];

export default getRoutes;
