import axios from 'axios';
import querystring from 'querystring';
import {
  SPOTIFY_CLIENT,
  SPOTIFY_SECRET,
  REDIRECT_URL,
  FRONTEND_URL,
} from '../utils/constants.js';

export function callbackController(req, res) {
  const code = req.query.code || null;
  const token = Buffer.from(`${SPOTIFY_CLIENT}:${SPOTIFY_SECRET}`).toString(
    'base64',
  );

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      code: code,
      redirect_uri: REDIRECT_URL,
      grant_type: 'authorization_code',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${token}`,
    },
  };

  axios
    .post(authOptions.url, authOptions.data, { headers: authOptions.headers })
    .then((response) => {
      const data = response.data;
      const access_token = data.access_token;
      let uri = FRONTEND_URL;
      res.redirect(uri + '?access_token=' + access_token);
    })
    .catch((err) => {
      console.log(err);
    });
}
