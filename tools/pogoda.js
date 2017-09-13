var axios = require('axios');

const URL = 'http://maps.googleapis.com/maps/api/geocode/json?address=Nieklonice';

axios.get(URL).then( (result) => {
    var lat = result.data.results[0].geometry.location.lat;
    var lng = result.data.results[0].geometry.location.lng;
    // console.log(result.data.results[0].geometry.location.lat);
    // module.exports.pogoda = result.data;
    const KEY = '26d46823e07f0b31a870d66e054f1b93';
    var adresW = `https://api.darksky.net/forecast/${KEY}/${lat},${lng}?lang=pl&units=si`;
    return axios.get(adresW);
}).then( (result) => {
    module.exports.pogoda = result.data;
    console.log(result.data);
}).catch( (error) => {
    console.log(error);
});