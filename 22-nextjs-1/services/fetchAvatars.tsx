import { Avatar } from "@/types/types";
export const fetchAvatars = async (num: number): Promise<Avatar[]> => {
  const url = `https://tinyfac.es/api/data?limit=${num}&quality=0`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.message);
    });
};
