import React from "react";

import GenerateDate from "./GenerateDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="TodayDate">
        <GenerateDate date={props.data.date} />
      </div>
      <div className="Weather-data">
        <div className="row">
          <div className="col-6">
            <div className="PicturePart">
              <div className="City"> {props.data.city}</div>
              <WeatherIcon code={props.data.icon} size={82} />
              <p className="Description">
                Description: {props.data.description}
              </p>
            </div>
          </div>
          <div className="col-6">
            <ul className="Today-weather-list">
              <WeatherTemperature celsius={props.data.temperature} />

              <li>
                <strong>Humidity: </strong> {props.data.humidity} %
              </li>
              <li>
                <strong>Wind: </strong> {props.data.wind} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
