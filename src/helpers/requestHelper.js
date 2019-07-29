export function getAuthHeader() {
  const config = {
    headers: {}
  }
  config['headers']['Authorization'] = localStorage.getItem('jwt');
  return config;
}

export function handleError(error, history) {
  (error.response.status === 401) ? history.push('/logout') : console.log(error);
}
