export default (body, method, authorization) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'x-access-token': authorization,
  },
  body: body ? JSON.stringify(body) : null
});
