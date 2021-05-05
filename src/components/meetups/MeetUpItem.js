import React from "react";
import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";

export default function MeetUpItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites </button>
        </div>
      </Card>
    </li>
  );
}
