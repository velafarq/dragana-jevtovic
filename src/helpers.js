export const isAdminWhiteList = (uid) => {
    const adminAuthwhiteList = ['kpVDlpiGngd4W4Z5nUVH20vTwDL2'];
    return adminAuthwhiteList.includes(uid);
}

export const designOptions = [
    { value:'', label: ''},
    { value:'blue_guinea', label: 'Blue Guinea Fowl'},
    { value:'royal_african', label: 'Royal African'},
    { value:'brown_feather', label: 'Brown Feather'},
    { value:'oceans_feather', label: 'Oceans Feather'},
    { value:'custom', label: 'Custom'}
];

export const typeOptions = [
    { value:'', label: ''},
    { value:'plates', label: 'Plates'},
    { value:'bowls', label: 'Bowls'},
    { value:'teapots', label: 'Teapots'},
    { value:'cups_saucers', label: 'Cups & Saucers'},
    { value:'mugs', label: 'Mugs'},
    { value:'large_servers', label: 'Large Servers'},
    { value:'condiments', label: 'Condiments'}
];