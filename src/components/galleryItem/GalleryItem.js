import React from 'react';

const GalleryItem = (props) => {
    return (
        <div className="cursor-pointer" onClick={() => props.getInfoForPopup(props.image.id)}>
            <img src={props.image.image} alt={props.image.id} className='w-full rounded-lg'></img>
            <p className="text-gray-900 text-sm text-left py-2">id: {props.image.id}</p>
        </div>
  );
};

export default GalleryItem;