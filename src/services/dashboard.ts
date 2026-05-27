export const getCharacters = async () => {
  try {
    const res = await fetch("/api/characters");
    const data = res.json();

  return data;
  } catch (error) {
    console.error(error)
  }
};
