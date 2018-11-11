const toEpoch = (date, time) => (Date.parse(`${date} ${time}`));
const legTime = (leg) => leg.map(f => (toEpoch(f.Destination.date, f.Destination.time) - toEpoch(f.Origin.date, f.Origin.time)));
const collapseTravelTime = (legs) => legs.reduce((accumulator, current) => {
    return accumulator = accumulator + current
}, 0);
const averageTravelTime = (arr) => {
    const total = arr.reduce((accumulator, current) => {
        return accumulator = accumulator + current
    }, 0)
    return {avgTravelTime: total / arr.length + 1}
}

const travelTime = {
    estimate: (travelPlan) => (
        averageTravelTime(
            travelPlan.map(trip => collapseTravelTime(legTime(trip.LegList.Leg))))
    ),

}

module.exports = travelTime;