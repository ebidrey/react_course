import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes} from 'prop-types';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import WeatherData from './WeatherData';
import './styles.css';


class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.props.city);
        
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather,
            });

        });
    }

    render() {
        const { city, onWeatherLocationClick } = this.props;
        const { data } = this.state;
        
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50} />
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;