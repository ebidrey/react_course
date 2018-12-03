import React, { Component } from 'react';
import './styles.css';
import ForecastItem from './ForecastItem';
import getUrlForecastByCity from './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';


class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    update = city => {
        const url_forecast = getUrlForecastByCity(city);

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({ forecastData });
            }
        )
    }

    componentDidMount() {
        // fetch or axios
        this.update(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null })
            this.update(nextProps.city);
        }
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( (forecast, index) => (
            <ForecastItem
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}
                key={index}>
            </ForecastItem>));
    }

    renderProgress() {
        return <h3>Cargando Pronostico Extendido...</h3>;
    }

    render () {
        const { forecastData } = this.state;

        return (
        <div>
            <h2 className='forecast-title'>Pronóstico Extendido para {this.props.city}</h2>
            {
                forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()
            }
        </div>);
    }
}

export default ForecastExtended;