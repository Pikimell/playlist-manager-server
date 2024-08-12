import jwt from 'jsonwebtoken';
import { APPLE_MUSIC_SECRET } from '../utils/constants.js';

const team_id = '';
const key_id = '';

const token = jwt.sign({}, APPLE_MUSIC_SECRET, {
  algorithm: 'ES256',
  expiresIn: '180d',
  issuer: team_id,
  header: {
    alg: 'ES256',
    kid: key_id,
  },
});

export function appleMusicTokenController(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ token: token }));
}
