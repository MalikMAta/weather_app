import React from "react";
import styles from "./mystyle.module.css";
import { converterForumula, timeConverter } from "../forumula/Convert";
import clouds from "../images/clouds.jpg";

function Weather(props) {
  const { daily } = props;


  // If data is loaded run the if statement which will render to the day
  if (daily) {
    return (
      <>
        <div className={styles.color}>
          {daily.map((d) => {
            return (
              <div>
                <p>{timeConverter(d.dt)}</p>
                {/* Render the weather depending on Day, Eve, Min, Max */}
                {/* the converterForumula will convert the weather from kelvin to F */}
                <p>Day: {converterForumula(d.temp.day)} &#8457;</p>
                <p>Eve: {converterForumula(d.temp.eve)} &#8457;</p>
                <p>Max: {converterForumula(d.temp.max)} &#8457;</p>
                <p>Min: {converterForumula(d.temp.min)} &#8457;</p>
                {d.weather.map((m) => {
                  {
                    /* If statement to check everytime of weather , and redner pictures depending on the description  */
                  }
                  if (m.description === "clear sky") {
                    return (
                      <img
                        src="//ssl.gstatic.com/onebox/weather/48/sunny.png"
                        alt=""
                      />
                    );
                  } else if (m.description === "overcast clouds") {
                    return (
                      <img
                        src="//ssl.gstatic.com/onebox/weather/48/cloudy.png"
                        alt=""
                      />
                    );
                  } else if (m.description === "light rain") {
                    return (
                      <img
                        src="//ssl.gstatic.com/onebox/weather/48/rain_light.png"
                        alt=""
                      />
                    );
                  } else if (m.description === "broken clouds") {
                    return (
                      <img
                        src="//ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                        alt=""
                      />
                    );
                  } else if (m.description === "rain") {
                    return (
                      <img
                        src="//ssl.gstatic.com/onebox/weather/48/sunny.png"
                        alt=""
                      />
                    );
                  } else if (m.description === "rain") {
                    return (
                      <img
                        src="//ssl.gstatic.com/onebox/weather/48/sunny.png"
                        alt=""
                      />
                    );
                  } else if (m.description === "rain") {
                    return (
                      <img
                        src="//ssl.gstatic.com/onebox/weather/48/sunny.png"
                        alt=""
                      />
                    );
                  } else {
                    return <p>....</p>;
                  }
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (

      //  If no information is loaded then add a loading 
      <div>
        <p className={styles.loading}> Loading...</p>
      </div>
    );
  }
}

export default Weather;
