const Category = ({ categories, filterMenu }) => {
  return (
    <div className="category-cont">
      {categories.map((category, index) => {
        return (
          <>
            <button onClick={() => filterMenu(category)} key={index}>
              {category}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Category;
