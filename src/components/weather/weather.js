import React from "react";
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './weather.css';

const Weather = ({
    weather,
    main,
    city,
    time,       
}) => {
    return (
        <div className="weather">
        <Card className="card">
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    City : {city.name} | {city.country}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Time : {time || '0:00'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Weather : {weather[0].description || 'Clear'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Temperature : {main.temp || '0.0'}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    )
}

Weather.propTypes = {
    weather: PropTypes.array,
    lastName: PropTypes.object,
}

export default Weather