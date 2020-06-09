import React from 'react';
import './ArtistBio.scss';

const ArtistBio = () => {
    const short_bio = 'Dragana Jevtovic has lived and worked in Cape Town (South Africa) since 1993. She was born in Belgrade (Serbia), where she studied art and philosophy at the University of Belgrade. Dragana combines her love for art with social involvement. She started selling her pottery on street fairs. Now she runs a company with twelve employees and sells worldwide. The quality of the pottery is always paramount.';
    return (
        <div className='artist-bio-container'>
            <h2 className="heading-text">The Artist</h2>
            <div className="bio">
                <figure>
                    <img className="bio__img" src="https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fdragana%2Fdragana-jevtovic.png?alt=media&token=66237126-061b-40c4-a4ef-47c87597bab5" alt="Dragana Jevtovic Ceramics Cape Town South Africa"/>
                </figure>
                <div className="bio__blurb">
                    <p>{short_bio}</p>
                    <button className="client-button">VIEW BIO</button>
                </div>
            </div>
        </div>
    )
}

export default ArtistBio;