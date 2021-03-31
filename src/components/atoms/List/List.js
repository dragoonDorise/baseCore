import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { ListItem } from "./ListItem";
import { ListItemIcon } from "./ListItemIcon";
import "./list.scss";
export const List = ({ children, css, icons }) => {
  return (
    <ul class={`list ${css}`}>
      {children.map((item, i) => {
        if (item.length >= 2) {
          return <ListItemIcon key={i} icon={item[0]} text={item[1]} />;
        } else {
          return <ListItem key={i}>{item}</ListItem>;
        }
      })}
    </ul>
  );
};

// List.propTypes = {
//   : PropTypes.string.isRequired,
// };
