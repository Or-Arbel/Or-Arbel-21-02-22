import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/favoritesSlice";
import { setCity } from "../redux/citySlice";
import Fade from "react-reveal/Fade";

function Favorites(props) {
  const favoriteCities = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const favoriteClicked = (e) => {
    dispatch(
      setCity({
        cityName: e.cityName,
        country: e.country,
        id: e.id,
      })
    );
  };

  return (
    <Fade top cascade>
      <div>
        <h1 className={props.theme === "light" ? "lightTitle" : "darkTitle"}>
          Favorite cities
        </h1>
        {favoriteCities.length > 0 ? (
          favoriteCities.map((e, i) => {
            return (
              <div className="favorite-container" key={i}>
                <button
                  className="removeBtn"
                  onClick={() => dispatch(remove(e))}
                >
                  Remove
                </button>
                <Link
                  to="/Or-Arbel-21-02-22/"
                  className="favorite-div"
                  onClick={() => favoriteClicked(e)}
                >
                  <div>
                    {e.cityName}, {e.country}
                  </div>
                  <div style={{ color: "white" }}>
                    {e.celsius} °C | {e.fahrenheit} °F
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <>
            <p style={{ color: props.theme === "dark" ? "white" : "black" }}>
              <span style={{ fontWeight: "bold" }}>No favorites yet.</span>
              <br />
              Keep track of the cities you're interested in by clicking 'Add to
              favorites'
            </p>
          </>
        )}
      </div>
    </Fade>
  );
}

export default Favorites;
