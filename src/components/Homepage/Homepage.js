import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "react-reveal/Fade";

import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../redux/favoritesSlice";
import { setCity } from "../../redux/citySlice";
import { ThemeContext } from "../../App";

function Homepage() {
  const { isDarkMode } = useContext(ThemeContext);

  const favoriteCities = useSelector((state) => state.favorites);
  const cityData = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const [openErrorToast, setOpenErrorToast] = useState(false);
  const [tempScale, setTempScale] = useState("celsius");

  const [citiesOptions, setCitiesOptions] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [weeklyWeather, setWeeklyWeather] = useState([]);

  const getDefaultCity = async () => {
    let response = await axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_API_KEY}&q=32.109333,34.855499`
      )
      .then((res) => {
        dispatch(
          setCity({
            cityName: res.data.AdministrativeArea.LocalizedName,
            country: res.data.Country.LocalizedName,
            id: res.data.Key,
          })
        );
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    if (!cityData.id) {
      getDefaultCity();
    }
  }, []);

  useEffect(async () => {
    if (cityData.id) {
      await getFiveDaysWeather(cityData.id);
      await getCityWeather(cityData.id);
    }
  }, [cityData]);

  const getCityWeather = async (cityKey) => {
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => res.data[0])
      .then((res) => {
        setCurrentWeather({
          celsius: Math.round(res.Temperature.Metric.Value),
          fahrenheit: Math.round(res.Temperature.Imperial.Value),
          text: res.WeatherText,
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const getFiveDaysWeather = async (cityKey) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let stringDay = "";
    let weeklyArr = weeklyWeather ?? [];

    let response_c = await axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
      )
      .then((res) => res.data.DailyForecasts)
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          stringDay = days[new Date(res[i].Date).getDay()];
          if (weeklyArr[i] === undefined) {
            weeklyArr[i] = { day: stringDay };
          }
          weeklyArr[i].minTempCelsius = Math.round(
            res[i].Temperature.Minimum.Value
          );
          weeklyArr[i].maxTempCelsius = Math.round(
            res[i].Temperature.Maximum.Value
          );
        }
      })
      .catch((err) => {
        console.warn(err);
      });

    let response_f = await axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=false`
      )
      .then((res) => res.data.DailyForecasts)
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          stringDay = days[new Date(res[i].Date).getDay()];
          weeklyArr[i].minTempFahrenheit = Math.round(
            res[i].Temperature.Minimum.Value
          );
          weeklyArr[i].maxTempFahrenheit = Math.round(
            res[i].Temperature.Maximum.Value
          );
        }
      })
      .catch((err) => {
        console.warn(err);
      });

    setWeeklyWeather(weeklyArr);
  };

  const isInFavorites = () => {
    for (let i = 0; i < favoriteCities.length; i++) {
      if (favoriteCities[i].id === cityData.id) {
        return true;
      }
    }
    return false;
  };

  const favoriteToggleHandler = (existsInFavorites) => {
    if (existsInFavorites === true) {
      dispatch(remove(cityData));
    } else {
      dispatch(
        add({
          cityName: cityData.cityName,
          country: cityData.country,
          id: cityData.id,
          celsius: currentWeather.celsius,
          fahrenheit: currentWeather.fahrenheit,
        })
      );
    }
  };

  const getOptions = (query) => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${query}`
      )
      .then((res) => res.data)
      .then((res) => {
        if (res) {
          let newOptionsArr = [];
          res.forEach((element) => {
            newOptionsArr.push({
              cityName: element.LocalizedName,
              country: element.Country.LocalizedName,
              id: element.Key,
              key: element.Key,
            });
          });
          setCitiesOptions(newOptionsArr);
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const onInputChangeHandler = (event, value) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      setOpenErrorToast(true);
    } else {
      getOptions(value);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenErrorToast(false);
  };

  return (
    <Fade>
      <div>
        <h1 className={isDarkMode ? "darkTitle" : "lightTitle"}>Weather App</h1>
        <div className="search-box">
          <Autocomplete
            disablePortal
            id="cities-search-box"
            onInputChange={(e, v) => onInputChangeHandler(e, v)}
            onChange={(e, v) => {
              if (v !== null) {
                dispatch(setCity(v));
              }
            }}
            options={citiesOptions}
            getOptionLabel={(option) => option.cityName}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Search City" />
            )}
          />

          <Snackbar
            open={openErrorToast}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please use English characters only.
            </Alert>
          </Snackbar>
        </div>

        <div
          className={
            isDarkMode ? "weather-box dark-weather-box" : "weather-box"
          }
        >
          <div className="weather-box-city">
            {cityData.id && currentWeather.celsius ? (
              <>
                {cityData.cityName}, {cityData.country}
              </>
            ) : (
              <div />
            )}
            <button
              onClick={() => {
                favoriteToggleHandler(isInFavorites());
              }}
            >
              {isInFavorites() ? (
                <BsSuitHeartFill size={20} />
              ) : (
                <BsSuitHeart size={20} />
              )}
              <span>
                {isInFavorites() ? "Remove from favorites" : "Add to favorites"}
              </span>
            </button>
          </div>
          <div className="temperature">
            {cityData.id && currentWeather.celsius ? (
              <>
                <h1>
                  {tempScale === "celsius"
                    ? currentWeather.celsius + "°C"
                    : currentWeather.fahrenheit + "°F"}
                </h1>
                <h3>{currentWeather.text}</h3>
              </>
            ) : (
              <CircularProgress />
            )}
          </div>

          <FormControl>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group"
              value={tempScale}
              name="radio-buttons-group"
              onChange={(e) => setTempScale(e.target.value)}
            >
              <FormControlLabel
                value="celsius"
                control={<Radio />}
                label="Celsius"
              />
              <FormControlLabel
                value="fahrenheit"
                control={<Radio />}
                label="Fahrenheit"
              />
            </RadioGroup>
          </FormControl>

          <div className="futureData">
            {weeklyWeather.map((e, i) => {
              return (
                <div className="futureWeather-box" key={i}>
                  <p>
                    {e.day}
                    <br />
                    {tempScale === "celsius" && e.minTempCelsius && (
                      <>
                        {e.minTempCelsius}°C / {e.maxTempCelsius}°C
                      </>
                    )}
                    {tempScale === "fahrenheit" && e.minTempFahrenheit && (
                      <>
                        {e.minTempFahrenheit}°F / {e.maxTempFahrenheit}°F
                      </>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
          <p>
            ☀ Wherever you go, no matter what the weather, always bring your own
            sunshine. ☀
          </p>
        </div>
      </div>
    </Fade>
  );
}

export default Homepage;
