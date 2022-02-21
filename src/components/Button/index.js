import PropTypes from "prop-types";
import "./styles.css";

const Button = (props) => {
  const { onClick, active, children } = props;
  let buttonClassName = "button";
  if (active) buttonClassName += " active";
  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
