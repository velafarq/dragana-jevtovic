import React from 'react';
export const isAdminWhiteList = (uid) => {
    const adminAuthwhiteList = ['kpVDlpiGngd4W4Z5nUVH20vTwDL2', 'b60yeBTNDCRPsNWWXcj2vyUxLhi2', 'TzwhV6kQRON90IJrQYHeOgjKQ6R2'];
    return adminAuthwhiteList.includes(uid);
}

export const DESIGN_NAMES = {
    '': 'All',
    'blue_guinea': 'Blue Guinea Fowl',
    'royal_african': 'Royal African',
    'brown_feather': 'Brown Feather',
    'oceans_feather': 'Oceans Feather',
    'african_elephant': 'African Elephant',
    'custom': 'Custom'
}

export const CATEGORY_NAMES = {
    '': 'All',
    'plates': 'Plates',
    'bowls': 'Bowls',
    'teapots': 'Tea Pots',
    'cups_saucers': 'Cups & Saucers',
    'mugs': 'Mugs',
    'large_servers': 'Large Servers',
    'condiments': 'Condiments',
    'jugs': 'Jugs'
}

export const designOptions = [
    { value:'', label: 'All'},
    { value:'blue_guinea', label: 'Blue Guinea Fowl'},
    { value:'royal_african', label: 'Royal African'},
    { value:'brown_feather', label: 'Brown Feather'},
    { value:'oceans_feather', label: 'Oceans Feather'},
    { value: 'african_elephant', label: 'African Elephant'},
    { value:'custom', label: 'Custom'}
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
    { value:'jugs', label: 'Jugs'}
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
    { value:'jugs', label: 'Jugs'}
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

export const getDesignName = (key) => {
    switch (key) {
        case 'blue_guinea':
            return 'Blue Guinea Fowl';
        
        default:
            return '';

    }
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

export const DESIGN_HERO_IMAGES = {
    'blue_guinea': {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/misc%2Fblue-guinea-slide-faded.png?alt=media&token=e6e2d5d7-cb82-4c2e-8d8a-ceddeff53a1d',
        alt: 'Dragana Jevtovic Blue Guinea Fowl Design Cape Town South Africa Pottery'
    },
    'royal_african': {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Froyal-african-hero.jpg?alt=media&token=c287cb26-1d29-4632-b468-638439d96a58',
        alt: 'Dragana Jevtovic Royal African Design Cape Town South Africa Pottery'
    },
    'brown_feather': {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d',
        alt: 'Dragana Jevtovic Brown Feather Design Cape Town South Africa Pottery'
    },
    'oceans_feather': {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Foceans-feathers-slider.JPG?alt=media&token=110083ff-3d26-49bc-86c8-25527f081e32',
        alt: 'Dragana Jevtovic Two Oceans Feather Cape Town South Africa Pottery'
    },
    'african_elephant': {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/misc%2Fblue-guinea-slide-faded.png?alt=media&token=e6e2d5d7-cb82-4c2e-8d8a-ceddeff53a1d',
        alt: 'Dragana Jevtovic Blue Guinea Fowl Design Cape Town South Africa Pottery'
    },
    'custom': {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/misc%2Fblue-guinea-slide-faded.png?alt=media&token=e6e2d5d7-cb82-4c2e-8d8a-ceddeff53a1d',
        alt: 'Dragana Jevtovic Blue Guinea Fowl Design Cape Town South Africa Pottery'
    }
}