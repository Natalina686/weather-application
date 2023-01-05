import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return weekDays[day];
  }

  return (
    <div>
      <div className="Weather-forecast-day">{day()}</div>
      <div className="Weather-forecast-icon">
        <WeatherIcon code={props.data.condition.icon} size={50} />
      </div>
      <div className="Weather-forecast-temp">
        <span className="Temp-min">{maxTemperature()}° </span>
        <span className="Temp-max"> {minTemperature()}°</span>
      </div>
    </div>
  );
}
