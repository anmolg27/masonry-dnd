import React, { memo, useRef } from "react";
import "./styles.css";
import { useDrag, useDrop } from "react-dnd";

import PropTypes from "prop-types";

const Card = (props) => {
  const { src, id, onMoveItem } = props;
  const ref = useRef(null);

  const [{ isDragging }, connectDrag] = useDrag({
    type: "IMG",
    item: { id },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      };
    }
  });

  const [, connectDrop] = useDrop({
    accept: "IMG",
    hover(hoveredOverItem, monitor) {
      if (hoveredOverItem.id !== id && monitor.isOver({ shallow: true })) {
        onMoveItem(hoveredOverItem.id, id);
      }
    }
  });

  connectDrag(ref);
  connectDrop(ref);

  const opacity = isDragging ? 0.5 : 1;
  const containerStyle = { opacity };
  return (
    <div className="card">
      <img ref={ref} style={containerStyle} src={src} alt="adsf" />
      <span className="card__number">{id}</span>
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onMoveItem: function (props, propName, componentName) {
    var fn = props[propName];
    if (!fn.prototype || typeof fn.prototype.constructor !== "function") {
      return new Error(propName + "must be a function with 2 args");
    }
  }
};

export default memo(Card);
