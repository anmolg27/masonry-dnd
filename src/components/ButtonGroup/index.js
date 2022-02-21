import "./styles.css";

import PropTypes from "prop-types";

const ButtonGroup = (props) => {
  const { children } = props;
  return <div className="button-group">{children}</div>;
};

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default ButtonGroup;
