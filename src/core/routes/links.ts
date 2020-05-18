import { mainRoutes } from "./path/mainRoutes";

export const links = {
  main: Object.keys(mainRoutes).map((key) => mainRoutes[key].link),
};
