const request = require('request-promise');

const API_KEY = '162a44148c08fcc52ed209eca6e23a1d';

class Weather{
    static retrieveByCity(city, callback){
        request({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then(function(res){
            callback(res)
        }).catch(function(err){
            console.log(err);
            callback({error: 'Unable to reach OpenWeatherMap API'});
        });
    }
}

module.exports = Weather;