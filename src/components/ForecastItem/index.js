import React from 'react';
import PropType from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';



const ForecastItem = ({ weekDay, hour, data }) => {
    return (
        <div>
            <div>{weekDay} - {hour} hs</div>
            <WeatherData data={data}></WeatherData>
        </div>
    );
};

ForecastItem.propTypes = {
    weekDay: PropType.string.isRequired,
    hour: PropType.number.isRequired,
}

export default ForecastItem;