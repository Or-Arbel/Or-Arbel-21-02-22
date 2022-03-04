import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";

const FutureWeather = (props) => {
  const [weeklyWeather, setWeeklyWeather] = useState([]);

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

    await axios
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

    await axios
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
    console.log(weeklyArr);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (props.cityKey) {
        await getFiveDaysWeather(props.cityKey);
      }
    };
    fetchData();
  }, [props.cityKey]);

  return (
    <div className={styles.futureData} key={props.cityKey}>
      {weeklyWeather.map((e, i) => {
        return (
          <div
            className={styles.futureWeatherBox}
            key={e.day + e.minTempCelsius}
          >
            <div className={styles.day}>{e.day}</div>
            <p>
              <br />
              {props.tempScale === "celsius" && e.minTempCelsius !== undefined && (
                <>
                  {e.minTempCelsius}°C / {e.maxTempCelsius}°C
                </>
              )}
              {props.tempScale === "fahrenheit" &&
                e.minTempFahrenheit !== undefined && (
                  <>
                    {e.minTempFahrenheit}°F / {e.maxTempFahrenheit}°F
                  </>
                )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FutureWeather;
