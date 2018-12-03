import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

/* 
 * this functions must return this structure to 
 * be processed after by the reducer
*/
const setCity = payload => ({type: SET_CITY, payload});

const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const fetchForecast = payload => {
    // payload es city
    return dispatch => {
        const url_forecast = getUrlForecastByCity(payload);

        // activar en el estado un indicador de busqueda de datos.
        dispatch(setCity(payload));
        
        
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                // console.log(forecastData);

                // modificar el estado con el resultado de la promise
                dispatch(setForecastData({city: payload, forecastData}));           
            }
        )
    };
};