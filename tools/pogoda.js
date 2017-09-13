var axios = require('axios');

const URL = 'http://maps.googleapis.com/maps/api/geocode/json?address=Koszalin';

axios.get(URL).then( (result) => {
    console.log(result.data);
    module.exports.pogoda = result.data;
}, (error) => {
    console.log(error);
});