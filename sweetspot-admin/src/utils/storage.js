export const loadCakesFromStorage = () => {
  const data = localStorage.getItem('cakes');
  return data ? JSON.parse(data) : [];
};

export const saveCakesToStorage = (cakes) => {
  localStorage.setItem('cakes', JSON.stringify(cakes));
};
