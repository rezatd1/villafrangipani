import React from 'react';
import GalleryOne from '../../components/galley/GalleryOne';
import HomeResources from '../../resources/HomeResources';

export default function GallerySection() {
    const renderGalleryItem = (index) => {
        const { img, imgClassName, textContainerClass, title } = HomeResources[index];
        return (
            <GalleryOne key={index} img={img} imgClassName={imgClassName} textContainerClass={textContainerClass} title={title} />
        );
    };

    return (
        <div className='bg-light-golden pb-4 gallery-section'>
            <div className='px-4 row d-flex justify-content-center mx-2'>
                {[1, 2].map((index) => renderGalleryItem(index))}
            </div>
            <div className='px-5 row d-flex justify-content-center mt-2'>
                {[3, 4, 5].map((index) => renderGalleryItem(index))}
            </div>
        </div>
    );
}