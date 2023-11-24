import styles from "./nav-link.module.css";
import PropTypes from "prop-types";

const NavLink = ({ children, path = "!#", extraClass = "", renderIcon }) => {
  const icon = renderIcon();
  return (
    <a
      href={path}
      className={`${styles.nav__link} ${extraClass} pl-5 pr-5 pb-4 pt-4 text text_type_main-default`}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </a>
  );
};

NavLink.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string,
  extraClass: PropTypes.string,
  renderIcon: PropTypes.func,
};

export default NavLink;
