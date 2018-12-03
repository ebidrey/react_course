import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';
import { fetchForecast } from '../actions';



class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.fetchForecast(city);
    }

    render() {
        return (
        <LocationList
            cities={this.props.cities}
            onSelectedLocation={this.handleSelectedLocation}
        />
        );
    }
}

LocationListContainer.propTypes = {
    cities: PropTypes.array.isRequired,
    fetchForecast: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    fetchForecast: value => dispatch(fetchForecast(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);