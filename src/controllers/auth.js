import queryString from 'querystring';
import { SPOTIFY_CLIENT, REDIRECT_URL } from '../utils/constants.js';

export function spotifyLoginController(req, res) {
  const baseUrl = 'https://accounts.spotify.com/authorize?';

  const params = {
    response_type: 'code',
    client_id: SPOTIFY_CLIENT,
    scope: 'user-read-private user-read-email user-library-read',
    redirect_uri: REDIRECT_URL,
  };

  res.redirect(baseUrl + queryString.stringify(params));
}
