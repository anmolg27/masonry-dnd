import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

const CardList = (props) => {
  const { children } = props;
  return (
    <div className="card-list">
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </div>
  );
};

CardList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default CardList;
