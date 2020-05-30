export interface VKLoginResponse {
  session: ISession;
  status: string;
  // connected — пользователь авторизован ВКонтакте и разрешил доступ приложению;
  // not_authorized — пользователь авторизован ВКонтакте, но не разрешил доступ приложению;
  // unknown — пользователь не авторизован ВКонтакте.
}

export interface ISession {
  expire: number; // — время в формате Unixtime, когда сессия устареет;
  mid: number; // — идентификатор пользователя;
  secret: string; // — служебный параметр для проверки авторизации на удаленной стороне;
  sid: string; // — служебный параметр для проверки авторизации на удаленной стороне;
  sig: string; // — служебный параметр для проверки авторизации на удаленной стороне;
  user: IVKUser; // — информация о пользователе.Объект, который содержит следующие поля:
}

export interface IVKUser {
  id: string; // — идентификатор пользователя;
  first_name: string; // — имя;
  last_name: string; // — фамилия;
  nickname: string; // — отчество или никнейм(если указано).
  domain: string; // — короткий адрес страницы;
  href: string; // — ссылка на страницу в формате https://vk.com/domain;
}
