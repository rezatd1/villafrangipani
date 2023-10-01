import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryTwo from '../../../components/galley/GalleryTwo';
import GalleryResources from '../../../resources/GalleryTwo';
import './GallerySection.scss';

export default function GallerySection() {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry>
                {GalleryResources.map(item =>
                    <GalleryTwo key={item.id} img={item.img} title={item.title} />
                )}
            </Masonry>
        </ResponsiveMasonry>
    )
}
