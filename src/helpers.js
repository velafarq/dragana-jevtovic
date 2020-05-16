
export const isAdminWhiteList = (uid) => {
    const adminAuthwhiteList = ['kpVDlpiGngd4W4Z5nUVH20vTwDL2'];
    return adminAuthwhiteList.includes(uid);
}