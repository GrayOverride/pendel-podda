const axios = require("axios");
const travelTime = require('./travelTime');

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
            return await getData(`https://api.sl.se/api2/typeahead.json?key=2a17ce62b7af40609eebae8c590ad38f&searchstring=${query}`)
        } catch (error) {
            return error
        }
    },
    calculateTravel: async (from, to) => {
        try {
            const data = await getData(`https://api.sl.se/api2/TravelplannerV3/trip.json?key=3cef19e7a6284292b3b1e154e7278cb9&lang=en&originId=${from}&destId=${to}`)
            return travelTime.estimate(data.Trip)
        } catch (error) {
            return error
        }
    }
}
module.exports = endpoints