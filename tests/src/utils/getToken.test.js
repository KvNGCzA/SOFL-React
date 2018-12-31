import getToken from '../../../src/utils/getToken';

describe('TEST GET USER TOKEN', () => {
  it('user object found', () => {
    localStorage.setItem('user', JSON.stringify({
      id: 8,
      fullName: 'Akanmu Christopher',
      email: 'akanmuchris@gmail.com',
      roleId: 3,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNihgfoutvuvbTQ0OTYwMTM1fQ.CcU4n0W_AjwUWU03qZ1deYp9NKpmYH-P-ADtFx1I9FE'
    }));
    expect(getToken()).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNihgfoutvuvbTQ0OTYwMTM1fQ.CcU4n0W_AjwUWU03qZ1deYp9NKpmYH-P-ADtFx1I9FE');
  });

  it('no user object found', () => {
    localStorage.removeItem('user');
    expect(getToken()).toBe(undefined);
  });
});
