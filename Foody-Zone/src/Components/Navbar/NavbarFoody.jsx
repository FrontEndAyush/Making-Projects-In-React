import Styles from "../Navbar/NavbarFoody.module.css";
const Navbar = () => {
  return (
    <>
      <div className={Styles.mainNav}>
        <div className={Styles.container}>
          <div className={Styles.logo_And_search}>
            <div className={Styles.logo}>
              <img src="/bgLogo/logo.svg" alt="logo" />
            </div>
            <div >
              <input type="search" name="" id="" placeholder="Search Food..." />
            </div>
          </div>
          <div className="for-Navs">
            <ul>
              <a href="">All</a>
              <a href="">Breakfast</a>
              <a href="">Lunch</a>
              <a href="">Dinner</a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
