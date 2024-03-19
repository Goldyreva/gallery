import React, { useEffect, useState } from 'react';
import { getImages, getImageById } from "../../api/gallery/gallery";
import GalleryItem from '../galleryItem/GalleryItem';
import Popup from '../popup/Popup';

const Gallery = () => {

    const [images, setImages] = useState([])
    const [openedImage, setOpenedImage] = useState({})

    useEffect(() => {
        getImages().then(response => {
            setImages(response)
        }).catch((e) => console.log(e.response.status))

    }, [])

    const getInfoForPopup = (id) => {
        getImageById(id).then(response => {
            setOpenedImage(response)
        }).catch((e) => console.log(e.response.status))
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 px-2 md:px-14">
            {
                images.map((image) => 
                <GalleryItem image={image} key={image.id} getInfoForPopup={getInfoForPopup} />
                )
            }
            {
                Object.keys(openedImage).length !== 0 && <Popup image={openedImage} setOpenedImage={setOpenedImage}/>
            }
        </div>
  );
};

export default Gallery;