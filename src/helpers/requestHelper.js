export function getAuthHeader() {
  const config = {
    headers: {}
  }
  config['headers']['Authorization'] = localStorage.getItem('jwt');
  return config;
}

export function handleError(error, history) {
  if (error.response && error.response.status === 401) {
    history.push('/logout')
  } else {
    console.log(error);
  }
}
