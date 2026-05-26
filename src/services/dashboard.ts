export const getCharacters = async () => {
  const res = await fetch("/api/characters");
  const data = res.json();

  return data;
};
