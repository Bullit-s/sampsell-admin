import { IRoute } from "../../../common/interfaces/route";

export const mainRoutes: Record<string, IRoute> = {
  statistics: {
    title: "Статистика",
    link: "/",
  },
  gifts: {
    title: "Раздачи",
    link: "/gifts",
  },
  applications: {
    title: "Заявки на продажу",
    link: "/applications",
  },
  accounts: {
    title: "Аккаунты",
    link: "/accounts",
  },
};
