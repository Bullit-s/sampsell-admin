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
  addGift: {
    title: "Раздачи",
    link: "/add-gift",
  },
  offereds: {
    title: "Заявки на продажу",
    link: "/offereds",
  },
  accounts: {
    title: "Аккаунты",
    link: "/accounts",
  },
};
