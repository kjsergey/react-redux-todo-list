export function getAuthHeader() {
  const config = {
    headers: {}
  }
  config['headers']['Authorization'] = localStorage.getItem('jwt');
  return config;
}
