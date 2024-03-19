import React from 'react';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';

const GalleryPage = () => {
    return (
        <div className="bg-gray-100">
            <Banner/>
            <Gallery/>
        </div>
  );
};

export default GalleryPage;