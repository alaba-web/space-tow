import { createContext, useContext, useState } from "react";
import data from "../../data.json";
const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState(data);
  console.log(jsonData);
  const [menu, setMenu] = useState(false);
  const [destination, setDestination] = useState(0);
  const openMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(!menu);
  };
  const displayItem = (item) => {
    return jsonData.destinations
      .map((planet) => planet)
      .filter((_, i) => i === item);
  };

  const handleDestClick = (index) => {
    setDestination(index);
  };

  console.log(displayItem(3));
  return (
    <DataContext.Provider
      value={{
        jsonData,
        setJsonData,
        menu,
        closeMenu,
        openMenu,
        displayItem,
        handleDestClick,
        destination,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, useData };
