import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const Masonry = (props) => {
  const { children } = props;
  return (
    <div className="masonry">
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </div>
  );
};

Masonry.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Masonry;
