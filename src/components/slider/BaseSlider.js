import React from 'react';
import rightArrow from '../../assets/img/right-arrow-60-white.webp';
import leftArrow from '../../assets/img/left-arrow-60-white.webp';

export default function BaseSlider({ img, title, carouselId }) {

    return (
        <div id={carouselId} className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img[0].img} className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block bg-light-blue-09 p-3">
                        <h5 className='w-auto cu-font-thin mb-0 mb-2 mt-2'>{title}</h5>
                    </div>
                </div>
                {img.length > 1 ?
                    img.slice(1).map((item, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={item.img} className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block bg-light-blue-09 p-3">
                                <h5 className='cu-font-thin mb-0 mb-2 mt-2'>{title}</h5>
                            </div>
                        </div>
                    ))
                    : null}

            </div>
            {img.length > 1 ?
                <>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                        <span aria-hidden="true"><img className='bg-middle-blue rounded-circle' src={leftArrow} /></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                        <span aria-hidden="true"><img className='bg-middle-blue rounded-circle' src={rightArrow} /></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </> : ''
            }
        </div >
    )
}
