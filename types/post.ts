import { UserItem } from "./user";

export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: UserItem;
}
