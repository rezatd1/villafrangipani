import React from 'react';
import GalleryOne from '../../components/galley/GalleryOne';
import HomeResourses from '../../resources/HomeResources';

export default function GallerySection() {
    return (
        <div className='bg-light-golden py-5 w-100 px-2'>
            <GalleryOne img={HomeResourses[1].img}
                imgClassName={HomeResourses[1].imgClassName}
                textContainerClass={HomeResourses[1].textContainerClass}
                title={HomeResourses[1].title} />
        </div>
    )
}
