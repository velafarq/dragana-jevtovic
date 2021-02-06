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
    'oceans_feather': 'Two Oceans Feather',
    'african_elephant': 'African Elephant',
    'custom': 'Custom',
    'new_creations': 'New Creations',
    'african_velvet': 'African Velvet',
    'gifts': 'Gifts'
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
    { value:'custom', label: 'Custom'},
    { value:'new_creations', label: 'New Creations'},
    { value:'african_velvet', label: 'African Velvet'},
    { value:'gifts', label: 'Gifts'}
];

export const categoryOptions = [
    { value:'blue_guinea', label: 'Blue Guinea Fowl'},
    { value:'royal_african', label: 'Royal African'},
    { value:'oceans_feather', label: 'Oceans Feather'},
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
    'african_velvet': {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d',
        alt: 'Dragana Jevtovic African Velvet Design Cape Town South Africa Pottery'
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

export const BLUE_GUINEA_SLIDES = [
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fblue-guinea-slide.png?alt=media&token=c4d35c3a-ef30-4051-aa05-35b4e08f2a19',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200918_150107.jpg?alt=media&token=09aa580c-e975-43e1-8b6f-10b2b0b48218',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20190715_134551.jpg?alt=media&token=dd9abb80-dafc-460d-8d3c-11eaacd699c2',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2FIMG_1961.JPG?alt=media&token=67d05031-0f7e-4e54-91ee-57ac37523a39',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2FIMG_1961.JPG?alt=media&token=67d05031-0f7e-4e54-91ee-57ac37523a39',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2FIMG_1965.JPG?alt=media&token=fdbb2dd8-e857-4f3c-a15c-d92c7831cb4a'
]

export const AFRICAN_VELVET_SLIDES = [
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200911_113304.jpg?alt=media&token=aa795e6f-ea3d-45e8-aa72-9a7a168fb0b7',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200913_160304.jpg?alt=media&token=29d62634-bebc-4238-b14d-1f642183e0ea',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200913_160413.jpg?alt=media&token=93d60329-88ff-4126-84b3-60a4b06e3592',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200918_150410.jpg?alt=media&token=b32b100a-e5a1-487e-9c85-1df67738b148',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-calabash-vase.jpg?alt=media&token=215d35ff-375c-4c8f-bcab-d57e4c0c28fa'
]

export const ROYAL_AFRICAN_SLIDES = [
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Froyal-african-main.png?alt=media&token=b6c6a8f9-d85f-43f8-838d-e4e3657fff78',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200911_104618.jpg?alt=media&token=b25af7b8-41de-4be1-8c9f-b97a4b17a063',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200911_104859.jpg?alt=media&token=0d73f6b6-623e-42ba-b05f-4a48f9b14713',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200911_105133.jpg?alt=media&token=b3ea64d6-557d-47a9-a25a-921f5d9f6d12',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200911_110557.jpg?alt=media&token=ac003f34-60f5-4f56-80dd-88cb84cc6f5b'
]

export const AFRICAN_ELEPHANT_SLIDES = [
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fafrican-elephant-main.png?alt=media&token=05f67e2d-c364-4ee7-9341-e7a4f148ec60',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200227_112648.jpg?alt=media&token=1fdb9aa7-fa87-4c85-baef-29c120ce8800',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200227_103757.jpg?alt=media&token=a877dc51-4c84-4d63-ab06-c61fcaae9a93',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200227_101040.jpg?alt=media&token=a10fbe7b-6f47-4a74-8200-ca49d6e0603c',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200227_101025.jpg?alt=media&token=3997c3c7-be75-41e7-83bc-73ec7ecf3cc9',
    'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20201009_135535.jpg?alt=media&token=6c294649-e4a0-471d-b16a-cb66b12bf9a8'
]

export const OCEANS_FEATHER_SLIDES = ['https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Foceans-feathers-slider.JPG?alt=media&token=110083ff-3d26-49bc-86c8-25527f081e32'];