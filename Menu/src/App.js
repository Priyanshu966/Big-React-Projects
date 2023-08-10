import { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import Category from "./Category";

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const filterCategory = items.map((item) => item.category);
  const categories = ["all", ...new Set(filterCategory)];

  const filterMenu = (category) => {
    if (category == "all") {
      setMenuItems(items);
      return;
    }
    const menu = items.filter((item) => item.category == category);
    setMenuItems(menu);
  };

  return (
    <main>
      <h2>our menu</h2>
      <div className="underline"></div>
      <Category categories={categories} filterMenu={filterMenu} />
      <Menu menuItems={menuItems} />
    </main>
  );
};

export default App;
