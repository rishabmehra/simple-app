import React, { Component } from 'react';
import './Dashboard.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardAction from '../actions/dashboardAction';
import Input from '../components/common/input/input';
import Button from  '../components/common/knob/knob';
import Weather from '../components/weather/weather';
import { SEARCH, PLACEHOLDER } from '../utils/constants';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getWeatherByLocation = this.getWeatherByLocation.bind(this)
    this.state = {
      list : '',
      latitude:'',
      longitude: '',
      searchValue: ''
    }
  }

  getLocation()  {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude
        this.setState({latitude });
        this.setState({ longitude });
        this.props.action.loadWeatherDetails({ latitude, longitude})
      }, () => {
        alert('Unable to retrieve your location');
      });
    }
  }

  componentDidMount () {
    this.getLocation()
  }

  searchHandler(e) {
    console.log(e.target.value)
    this.setState({searchValue : e.target.value})
  }

  getWeatherByLocation() {
    const { searchValue } = this.state;
    this.props.action.getWeatherDetailsByLocation(searchValue)
  }

  generateList() {
    const { weatherList, city } = this.props;

    if(weatherList && weatherList.length > 0) {
      const list = weatherList.map((item,index) => {
        return(
          <Weather
            id={item.dt}
            key={index}
            weather={item.weather}
            main={item.main}
            city={city}
            time={item.dt_txt}
          />
        )
      })
      return list
    }
  }
  
  render() {
    const { searchValue } = this.state;
    return (
      <div className="card-container">
      <div className="card-header">
              <div className="cardHeader--search">
              <div className="carHeader--search-input">
                   <Input
                    value={searchValue}
                    onChangeHandler={this.searchHandler}
                    label={PLACEHOLDER}
                    />
              </div>
                 <div className="carHeader--search-button">
                   <Button text={SEARCH} onClickHandler={this.getWeatherByLocation} />
                 </div>
             </div>
      </div>
      <div className="card-layout">
        {this.generateList()}
      </div>
    </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    weatherList : state.dashboardReducer.list,
    city: state.dashboardReducer.city
  }
}

function mapDispatchToProps(dispatch){
  return {
    action : bindActionCreators(dashboardAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);