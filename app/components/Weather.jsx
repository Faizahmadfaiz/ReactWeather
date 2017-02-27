var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
const { browserHistory } = require("react-router");

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        var that = this;
        
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            browserHistory.push('/');
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            browserHistory.push('/');
        }
    },
    render: function() {  
        var {isLoading, location, temp, errorMessage} = this.state;

        
        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;