const checkReponse = (res) => {
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText || "Произошла ошибка"}`);
  }
  return res.json();
};

export default checkReponse;
