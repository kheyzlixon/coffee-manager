import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div key={index} className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-green-400"
                  : "text-slate-900 800px:text-white"
              } pb-[30px] font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

// Validation des props avec PropTypes
// Navbar.propTypes = {
//   active: PropTypes.number.isRequired,
// };

export default Navbar;
