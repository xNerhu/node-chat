export const requestAPI = (
  data: any,
  url: string,
  method: 'GET' | 'POST' = 'GET',
): any => {
  return new Promise((resolve, reject) => {
    fetch(`/api/${url}`, {
      credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({ 'content-type': 'application/json' }),
      method,
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};
