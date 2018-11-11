const trafiklab = require('./lib/trafiklab');
const bodyParser = require('body-parser')
const service = require('restana')({
    ignoreTrailingSlash: true
});
service.use(bodyParser.json())

//1000 sergels torg

//9117  odenplan

service.get('/traveltime/:from/:to', async (req, res) => {
    try {
        res.send(await trafiklab.calculateTravel(req.params.from, req.params.to))
    } catch (error) {
        console.log(error)
    }
});

service.get('/find/station/:query', async (req, res) => {
    try {
        res.send(await trafiklab.search(req.params.query))
    } catch (error) {
        console.log(error)
    }
})
service.start(8080)