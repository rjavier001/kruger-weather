import { BsEye, BsWater, BsThermometer, BsWind } from "react-icons/bs";

import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";

const WeatherMainInfo = ({ loading, data, date, icon }) => {
  return (
    // <div >
    //   <div>{weather?.location?.name}</div>
    //   <div>{weather?.location?.country}</div>
    //   <div>
    //     <div>
    //       <img src={`http:${weather?.current?.condition?.icon}`} width="128" />
    //     </div>
    //     <div >
    //       <div>
    //         {weather?.current?.condition.text}
    //       </div>
    //       <div>{weather?.current?.temp_c}º</div>
    //     </div>
    //   </div>
    //   <iframe
    //     title="map"
    //     src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
    //     width="100%"
    //     height="350"
    //     style={{ border: 0 }}
    //     allowfullscreen=""
    //     loading="lazy"
    //     referrerpolicy="no-referrer-when-downgrade"
    //   ></iframe>
    // </div>
    <div className="w-full max-w-[450px] bg-black/20 min-h-[480px] text-white backdrop-blur-[32px] rounded-[32px] py-6 px-2 m-2">
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <ImSpinner8 className="text-white text-5xl animate-spin" />
        </div>
      ) : (
        <div>
          {/* card top */}
          <div className="flex items-center gap-x-5">
            {/* icon */}
            <div className="text-[80px]">{icon}</div>
            <div>
              {/* country name */}
              <div className="text-2xl font-semibold">
                {data.name}, {data.sys.country}
              </div>
              {/* date */}
              <div>
                {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                {date.getUTCFullYear()}
              </div>
            </div>
          </div>
          {/* card body */}
          <div className="my-0">
            <div className="flex justify-center items-center">
              {/* temp */}
              <div className="text-[100px] leading-none font-light">
                {parseInt(data.main.temp)}
              </div>
              {/* celsius icon */}
              <div className="text-4xl">
                <TbTemperatureCelsius />
              </div>
            </div>
            {/* weather description */}
            <div className="capitalize text-center">
              {data.weather[0].description}
            </div>
          </div>
          {/* card bottom */}
          <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                {/* icon */}
                <div className="text-[20px]">
                  <BsEye />
                </div>
                <div>
                  Visibility{" "}
                  <span className="ml-2">{data.visibility / 1000} km</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                {/* icon */}
                <div className="text-[20px]">
                  <BsThermometer />
                </div>
                <div className="flex">
                  Feels like
                  <div className="flex ml-2">
                    {parseInt(data.main.feels_like)}
                    <TbTemperatureCelsius />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                {/* icon */}
                <div className="text-[20px]">
                  <BsWater />
                </div>
                <div>
                  Humidity
                  <span className="ml-2">{data.main.humidity} %</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                {/* icon */}
                <div className="text-[20px]">
                  <BsWind />
                </div>
                <div>
                  Wind <span className="ml-2">{data.wind.speed} m/s</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <iframe
                title="map"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${data.coord.lon}5!3d${data.coord.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default WeatherMainInfo;
