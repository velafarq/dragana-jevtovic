import React from 'react';
export const isAdminWhiteList = (uid) => {
    const adminAuthwhiteList = ['kpVDlpiGngd4W4Z5nUVH20vTwDL2', 'b60yeBTNDCRPsNWWXcj2vyUxLhi2'];
    return adminAuthwhiteList.includes(uid);
}

export const designOptions = [
    { value:'', label: 'All'},
    { value:'blue_guinea', label: 'Blue Guinea Fowl'},
    { value:'royal_african', label: 'Royal African'},
    { value:'brown_feather', label: 'Brown Feather'},
    { value:'oceans_feather', label: 'Oceans Feather'},
    { value:'custom', label: 'Custom'}
];

export const typeOptions = [
    { value:'', label: 'All'},
    { value:'plates', label: 'Plates'},
    { value:'bowls', label: 'Bowls'},
    { value:'teapots', label: 'Teapots'},
    { value:'cups_saucers', label: 'Cups & Saucers'},
    { value:'mugs', label: 'Mugs'},
    { value:'large_servers', label: 'Large Servers'},
    { value:'condiments', label: 'Condiments'}
];

export const hiddenOptions = [
    { value: 'all', label: 'All'},
    { value: false, label: 'Displayed'},
    { value: true, label: 'Hidden'}
];

export const DisplayOptions = ({ options }) => {
    return options.map((option, idx) => (
        <option key={idx} value={option.value}>{option.label}</option>
    ))
};

export const setStringToBool = (string) => {
    if (string === 'true') {
        return true;
    }
    if (string === 'false') {
        return false;
    }
    return 'all';
}