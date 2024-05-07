import "./App.css";
import { useData } from "./contexts/DataContext";
import Crew from "./pages/Crew";
import Destinations from "./pages/Destinations";

import Home from "./pages/Home";
import Technology from "./pages/Technology";

const displayPages = (page) => {
  switch (page) {
    case 0:
      return <Home />;
    case 1:
      return <Destinations />;
    case 2:
      return <Crew />;
    case 3:
      return <Technology />;
    default:
      return <Home />;
  }
};

function App() {
  const { activeNav, setActiveNav } = useData();
  return <>{displayPages(activeNav)}</>;
}

export default App;
