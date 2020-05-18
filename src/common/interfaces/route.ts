export interface IRoute {
  title: string;
  link: string;
  dynamicLink?: (...args: (string | number)[]) => string;
}
