// "use server";
import { API_URL } from "@/config/constants";
import { handleError } from "@/lib/handleError";
import { UserItem } from "@/types/user";

export async function getUserDetail(userId: number) {
  const response = await fetch(`${API_URL}/users/${userId}`);
  const userData = (await response.json()) as UserItem;

  if (!response.ok) {
    throw await handleError(response);
  }

  return userData;
}

export async function getAllUsersData() {
  const response = await fetch(`${API_URL}/users/`);
  const userData = (await response.json()) as UserItem[];

  if (!response.ok) {
    throw await handleError(response);
  }

  const usersMap = userData.reduce(
    (acc: { [key: string]: UserItem }, currentValue) => {
      acc[`${currentValue.id}`] = currentValue;
      return acc;
    },
    {}
  );

  return usersMap;
}
