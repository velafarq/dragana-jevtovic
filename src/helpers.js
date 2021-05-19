import React from 'react';
export const isAdminWhiteList = (uid) => {
    const adminAuthwhiteList = ['kpVDlpiGngd4W4Z5nUVH20vTwDL2', 'b60yeBTNDCRPsNWWXcj2vyUxLhi2', 'TzwhV6kQRON90IJrQYHeOgjKQ6R2'];
    return adminAuthwhiteList.includes(uid);
}

export const DESIGN_NAMES = {
    '': 'All',
    'blue_guinea': 'Blue Guinea Fowl',
    'royal_african': 'Royal African',
    'oceans_feather': "Two Oceans' Feathers",
    'african_elephant': 'African Elephant',
    'custom': 'Custom',
    'new_creations': 'New Creations',
    'african_velvet': 'African Velvet',
    'gifts': 'Gifts'
}

export const TYPE_NAMES = {
    '': 'All',
    'plates': 'Plates',
    'bowls': 'Bowls',
    'teapots': 'Tea Pots',
    'cups_saucers': 'Cups & Saucers',
    'mugs': 'Mugs',
    'large_servers': 'Large Servers',
    'condiments': 'Condiments',
    'jugs': 'Jugs',
    'sets': 'Place Settings & Sets'
}

export const designOptions = [
    { value:'', label: 'All'},
    { value:'blue_guinea', label: 'Blue Guinea Fowl'},
    { value:'royal_african', label: 'Royal African'},
    { value:'oceans_feather', label: 'Oceans Feather'},
    { value: 'african_elephant', label: 'African Elephant'},
    { value:'custom', label: 'Custom'},
    { value:'new_creations', label: 'New Creations'},
    { value:'african_velvet', label: 'African Velvet'},
    { value:'gifts', label: 'Gifts'}
];

export const filterCategoryOptions = [
    { value:'', label: 'All'},
    { value:'blue_guinea', label: 'Blue Guinea Fowl'},
    { value:'royal_african', label: 'Royal African'},
    { value:'oceans_feather', label: "Two Oceans' Feathers"},
    { value: 'african_elephant', label: 'African Elephant'},
    { value:'custom', label: 'Custom'},
    { value:'new_creations', label: 'New Creations'},
    { value:'african_velvet', label: 'African Velvet'},
    { value:'gifts', label: 'Gifts'}
];

export const categoryOptions = [
    { value:'blue_guinea', label: 'Blue Guinea Fowl'},
    { value:'royal_african', label: 'Royal African'},
    { value:'oceans_feather', label: "Two Oceans' Feathers"},
    { value: 'african_elephant', label: 'African Elephant'},
    { value:'custom', label: 'Custom'},
    { value:'new_creations', label: 'New Creations'},
    { value:'african_velvet', label: 'African Velvet'},
    { value:'gifts', label: 'Gifts'}
];

export const typeOptions = [
    { value:'all', label: 'All'},
    { value:'plates', label: 'Plates'},
    { value:'bowls', label: 'Bowls'},
    { value:'teapots', label: 'Teapots'},
    { value:'cups_saucers', label: 'Cups & Saucers'},
    { value:'mugs', label: 'Mugs'},
    { value:'large_servers', label: 'Large Servers'},
    { value:'condiments', label: 'Condiments'},
    { value:'jugs', label: 'Jugs'},
    { value: 'sets', label: 'Place Settings & Sets' }
];

export const adminTypeOptions = [
    { value:'', label: 'All'},
    { value:'plates', label: 'Plates'},
    { value:'bowls', label: 'Bowls'},
    { value:'teapots', label: 'Teapots'},
    { value:'cups_saucers', label: 'Cups & Saucers'},
    { value:'mugs', label: 'Mugs'},
    { value:'large_servers', label: 'Large Servers'},
    { value:'condiments', label: 'Condiments'},
    { value:'jugs', label: 'Jugs'},
    { value: 'sets', label: 'Place Settings & Sets' }
];

export const createTypeOptions = [
    { value:'', label: ''},
    { value:'plates', label: 'Plates'},
    { value:'bowls', label: 'Bowls'},
    { value:'teapots', label: 'Teapots'},
    { value:'cups_saucers', label: 'Cups & Saucers'},
    { value:'mugs', label: 'Mugs'},
    { value:'large_servers', label: 'Large Servers'},
    { value:'condiments', label: 'Condiments'},
    { value:'jugs', label: 'Jugs'},
    { value: 'sets', label: 'Place Settings & Sets' }
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

export const handlePrice = (prices, currency) => {
    const symbol = currencyLabels[currency];
    if (symbol) {
        let price;
        if (typeof prices === 'object') {
            price = prices[currency];
        } else {
            price = prices;
        }
        if (!+price) {
            return 'Please ask for pricing';
        }
        const fixed = Number(price).toFixed(2);
        return `${symbol}${fixed}`;
    }
        return '';
}

export const currencyLabels = {
    usd: '$',
    gbp: '£',
    zar: 'R'
}

export const handleCategoryLabels = (categories) => {
    const labels = [];
    categories.forEach(cat => {
        labels.push(DESIGN_NAMES[cat]);
    });

    return labels.join(', ');
}