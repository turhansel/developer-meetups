import React, { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";
import FavoriteContext from "../../store/favorite-context";

export default function MeetUpItem(props) {
  const favoritesCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image,
      });
    }
  };
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
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
}
