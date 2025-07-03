const cron = require('cron');
const https = require('https');

//const backendUrl = 'https://www.jvrecords.fi/recback/build/index.html#/readderamlist';
const backendUrl = 'https://www.jvrecords.fi/recback/api/records';

const job = new cron.CronJob('*/14 * * * *', function () {
  console.log('Restarting server');

  var data = '';
  var body = ''; 

  https
    .get(backendUrl, (res) => {
      if(res.statusCode === 200) {
        console.log('Server Restarted');
      }
      else {
        console.error('failed to restart server with status code: ${res.statusCode}');
      }
      res.on('data', (chunk) => {
        data = data + chunk.toString();
      });

      res.on('end', () => {
        body = JSON.parse(data);
        console.log(body);
      });
    });
    const dateData = `${new Date().toUTCString()} : Cron Job Runs on every 14 minutes`;
    console.log(dateData);
});

const add = (x, y) => {
  return x + y;
}

const subtract = (x, y) => {
  return x - y;
}

module.exports = { add, subtract, job };
