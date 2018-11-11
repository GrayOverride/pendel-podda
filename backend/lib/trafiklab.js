const axios = require("axios");
const travelTime = require('./travelTime');
const secrets = require('../secrets');
const getData = async url => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
};

const endpoints = {
    search: async (query) => {
        try {
            return await getData(`https://api.sl.se/api2/typeahead.json?key=${secrets.platsuppslag}&searchstring=${query}`)
        } catch (error) {
            return error
        }
    },
    calculateTravel: async (from, to) => {
        try {
            const data = await getData(`https://api.sl.se/api2/TravelplannerV3/trip.json?key=${secrets.reseplanerare}&lang=en&originId=${from}&destId=${to}`)
            return travelTime.estimate(data.Trip)
        } catch (error) {
            return error
        }
    }
}
module.exports = endpoints