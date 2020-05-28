import { IElementValue } from "../IElementValue";

export interface CategoryDto {
  categoriesLoader: boolean;
  drawerOpen: boolean;
  selectedCategoryId: number;
  categories: ICategories[];
}

export interface ICategories {
  properties: ICategoriesAtributes; //Свойства
  id: IElementValue;
  name: IElementValue;
  category: ICategories[]; //список категорий
}

interface ICategoriesAtributes {
  cnt: string;
  sub: string;
}
