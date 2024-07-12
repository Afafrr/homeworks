export const fetchAvatars = async (num) => {
  const url = `https://tinyfac.es/api/data?limit=${num}&quality=0`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const reducedRes = res.map((obj) => {
        return { id: obj.id, img: obj.url };
      });
      return reducedRes;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err.message);
    });
};
