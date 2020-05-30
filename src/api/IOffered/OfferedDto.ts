export interface IOfferedResponse {
  key: string;
  value: IOffered;
}

export interface IOffered {
  date: string;
  categoryId: string; //ID категории
  categoryName: string; // Название Проект->Сервер
  productInfo: string; // Рег данные
  productName: string; // Название товара
  productLogin: string; // Логин аккаунта
  productPassword: string; // Пароль товара
  productPrice: ""; // ЦЕна товара
  requisites: "asf"; // Реквизиты
  status: string;
}
