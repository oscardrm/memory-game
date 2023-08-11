import { clearCurrentUserName, getCurrentUserName, setCurrentUserName } from '@/app/helpers/globalFunctions';

describe('User name', () => {
  it('save and get user name', () => {
    const userName = "testing_user";
    setCurrentUserName(userName);
    const result = getCurrentUserName();
    expect(result).toBe(userName);
  })

  it('clear user name', () => {
    clearCurrentUserName();
    const userName = getCurrentUserName();
    expect(userName).toBeNull();
  })
})



