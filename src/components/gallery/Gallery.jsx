import React from 'react';
import './Gallery.scss';
import { useFirestoreConnect } from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import { Helmet } from 'react-helmet';

const Gallery = () => {
    const [productGallery, setProductGallery] = useState([]);

    useFirestoreConnect([
        { collection: 'products', where: ['hidden', '==', false] }
    ]);
    const products = useSelector(state => state.firestore.ordered.products);

    useEffect(() => {
        if (products && products.length) {
            const gallery = [];

            const shuffleArray = (array) => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }

            const buildProductGallery = (products) => {
                    products.forEach(product => {
                        const separated = product.images.reduce((acc, img) => {
                            if (img.url) {
                                acc.push({ id: product.id, url: img.url });
                                // const preloaded = new Image();
                                // preloaded.src = img.url;
                            }
                            return acc;
                        }, []);
                        gallery.push(...separated);
                    });
                }
                buildProductGallery(products);
                const shuffled = shuffleArray(gallery);
                setProductGallery(shuffled);
        }
    }, [products]);

    const renderGalleryItem = (item, i) => {
        return (
            <Link key={i} className="gallery-item" to={'/products/' + item.id} target="_blank">
                <img className="gallery-img fade-in" src={item.url} alt="" key={i} />
                <div className="overlay">
                <span class="material-icons">
                    open_in_new
                </span>
                </div>
            </Link>
        )
    }

    return (
        <section className="main-gallery header-padding">
            <Helmet>
                <title>Gallery | Dragana Jevtovic Ceramics</title>
                <meta name="description" content="Plates, Bowls, Teapots, Mugs, Servers and Place Settings made by Dragana Jevtovic in Cape Town, South Africa" />
            </Helmet>
            {productGallery && productGallery.length ? productGallery.map((product, i) => renderGalleryItem(product, i)) : <Spinner />}
        </section>
    )
}

export default Gallery;