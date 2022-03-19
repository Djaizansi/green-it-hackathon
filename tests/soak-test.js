import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 400 }, // ramp up to 400 users
    { duration: '5m', target: 400 }, // stay at 400 for 5 mins
    { duration: '2m', target: 0 }, // scale down. (optional)
  ],
};

const API_BASE_URL = 'https://green-it-esgi.000webhostapp.com/';

export default function () {
  http.batch([
    ['GET', `${API_BASE_URL}`],
  ]);

  sleep(1);
}
