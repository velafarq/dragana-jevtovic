import React from 'react';
import './ArtistBio.scss';

const ArtistBio = () => {
    const a = 'Dragana Jevtovic, artist, ceramicist, creator of the iconic Blue and White Guinea Fowl design.  Her ceramics and paintings are treasured in homes across the world. Dragana has worked from her studio in Cape Town, South Africa for the last 27 years.';
    const b = 'In her studio at her home in Durbanville, Cape Town, Dragana has been exploring the clay medium in many ways - from hand thrown and slab built one-off pieces to decorated slip-cast utility ware and lamps.';
    const c = 'As an expression of her love for Africa and her European heritage, Dragana developed her acclaimed Guinea Fowl designs, depicting the quaint, indigenous African Guinea Fowl that abound in the gardens and fields of Southern Africa.';
    const d = 'Every piece is uniquely decorated by free hand, and often includes African motives - birds, feathers and elephants.  Shunning ready-made commercial products, she mixes her own cobalt blue and tawny underglaze colours. Her sought-after Blue Guinea Fowl design in cobalt blue is inspired by the long Dutch and Chinese ceramic tradition and interpreted with an vision which owes much to her European heritage.';
    const e = "Her slip cast ceramics are stoneware fired to 1200'C and glazed with lead-free, transparent glaze, making her products oven proof and microwave and dishwasher safe.";
    const f = 'Dragana was born in Belgrade, Yugoslavia where she studied Art and Philosophy at the University of Belgrade, and Music at the Belgrade Faculty of Music Arts, obtaining the B A Mus (Honours).  She moved to Cape Town, South Africa, in 1993.';
    const g = 'When she is not working in the studio, Dragana is kept busy by her other passion – music. A trained operatic singer, she has performed in concerts in Europe, the United States and South Africa. She compiles and presents live classical, jazz and world music programmes for Fine Music Radio of Cape Town, which can be heard world-wide on the internet - www.fmr.co.za';
    const h = 'Besides having a special love for ceramics and music, Dragana paints in oils and loves cooking, her five dogs and a cat.';
    const paragraphs = [a, b, c, d, e, f, g, h];
    return (
        <div className='artist-bio-container'>
            <h2 className="heading-text">The Artist</h2>
            <div className="bio">
                <figure>
                    <img className="bio__img" src="https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fdragana%2Fdragana-green-jacket-tiny.jpg?alt=media&token=16d589b3-97b3-44dd-ad2a-d599efa7f6c2" alt="Dragana Jevtovic Ceramics Cape Town South Africa"/>
                </figure>
                <div className="bio__blurb">
                    {paragraphs.map(p => <p>{p}</p>)}
                </div>
            </div>
        </div>
    )
}

export default ArtistBio;