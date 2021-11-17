import { AuthingSSO } from '@authing/sso';

const authing = new AuthingSSO({
  appId: '61948f51bc0cde46337a5107',
  origin: 'https://willin.authing.cn',
  redirectUri: 'http://localhost:3000/callback'
});

export default authing;
