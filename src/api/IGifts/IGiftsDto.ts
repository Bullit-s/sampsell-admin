import { IVKUser } from "../VK/VKLoginResponse";

export interface IGiftsResponse {
  key: string;
  value: IGift;
}

export interface IGift {
  product: string;
  date: string;
  members: IVKUser[];
  winner?: IVKUser;
}
