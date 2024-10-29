import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className={`${styles.normalFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div key={index} className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1 ? "text-lime-200" : "text-white"
              } font-[500] px-6 cursor-pointer}`}
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
