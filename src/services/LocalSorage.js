const localStorage = () => {
  const localSave = localStorage.getItem("search");

  if (localSave === null) {
    return defaultData;
  } else {
    return JSON.parse(localSave);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default objToExport;
