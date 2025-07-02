const cron = require('cron');
const https = require('https');

const backendUrl = 'https://www.jvrecords.fi/recback/build/index.html';

const job = new cron.CronJob('*/14 * * * *', function () {

  console.log('Restarting server');

  https
    .get(backendUrl, (res) => {
      if(res.statusCode === 200) {
        console.log('Server Restarted');
      }
      else {
        console.error('failed to restart server with status code: ${res.statusCode}');
      }
    });
});

const add = (x, y) => {
  return x + y;
}

const subtract = (x, y) => {
  return x - y;
}

module.exports = { add, subtract, job };
