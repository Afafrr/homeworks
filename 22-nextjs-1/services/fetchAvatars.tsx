export const fetchAvatars = async (num: number) => {
  const url = `https://tinyfac.es/api/data?limit=${num}&quality=0`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
