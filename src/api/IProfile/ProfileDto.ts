export interface IProfile {
  role?: string;
  email?: string;
  isLoaded: boolean;
  isEmpty: boolean;
}

export interface IProfileState {
  profileLoader: boolean;
}

export interface IPurchases {
  id_i: string; //Номер счета
  name_d: string; //Название товара
  amount: string; //сумма
  curr: string; //Валюта
  date: string; //Дата покупки
  email: string; //Email
  id_d: string; //Номер товара
  ip: string; //IP адрес
  isMyProduct: string; //Продукт магазина
  referer: string; //Реферел
  sha256: string; // хэш от строки, состоящей из вашего пароля в нижнем регистре, номера счета и идентификатора товара через ";"
  through: string; //base64-закодированная строка, содержащая набор параметров, дополнительно переданных с вашего сайта на страницу оплаты oplata.info. Параметры могут нести в себе User ID, значения для отслеживания конверсии оплаты и т.п.
}
