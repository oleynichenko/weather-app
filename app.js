const request = require(`request`);
const yargs = require(`yargs`);

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: `a`,
      describe: `Adrress to fetch weater for`,
      string: true
    }
  })
  .help()
  .alias(`help`, `h`)
  .locale(`en`)
  .argv;

const url = `http://www.mapquestapi.com/geocoding/v1/address?key=qtDEtbchu64RuAz8z2BEgNjEZWbss53G&location=${encodeURIComponent(argv.a)}`;

request({url, json: true}, (error, response, body) => {
  // console.log(JSON.stringify(body, undefined, 0));
  console.log(body.results[0].locations[0].latLng);
});
