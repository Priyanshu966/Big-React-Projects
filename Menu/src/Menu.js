const Menu = ({ menuItems }) => {
  return (
    <section className="menu-cont">
      {menuItems.map((item) => {
        const { id, title, desc, price, img } = item;
        return (
          <article className="menu" key={id}>
            <img src={img} alt={title} />
            <div className="info">
              <header>
                <h4>{title}</h4>
                <span>${price}</span>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
