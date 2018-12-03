import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';


import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Barcelona,es',
  'Washington,us',
  'Bogota,col',
  'Mexico,mex',
  'Madrid,es',
  'Lima,pe',
]


class App extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <AppBar position='sticky'>
                        <Toolbar>
                            <Typography variant='title' color='inherit'>
                                Weather App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationListContainer cities={cities} />
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper>
                            <div className='detail'>
                                <ForecastExtendedContainer />
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;