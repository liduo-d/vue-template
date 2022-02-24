export const hasPermission = (auth, authList = []) => {
    if (authList[0] === '*') return true;
    return authList.findIndex(authItem => authItem === auth) > -1;
};
