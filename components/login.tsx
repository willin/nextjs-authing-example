import authing from '../lib/authing';

export default function AuthingLogin() {
  function login() {
    authing.login();
  }
  return (
    <a href='#' onClick={login}>
      Login / 登录 Authing
    </a>
  );
}
