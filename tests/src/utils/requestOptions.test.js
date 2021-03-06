import requestOptions from '../../../src/utils/requestOptions';

describe('TEST request options function', () => {
  it('test without body', () => {
    const firstResult = requestOptions(null, 'POST');
    expect(firstResult).toEqual({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-access-token': undefined,
      },
      body: null
    });
  });

  it('test with body and x-access-token', () => {
    const firstResult = requestOptions({ user: { name: 'Chris Akanmu' } }, 'GET', '82635t378046317461934');
    expect(firstResult).toEqual({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-access-token': '82635t378046317461934',
      },
      body: JSON.stringify({ user: { name: 'Chris Akanmu' } })
    });
  });
});
