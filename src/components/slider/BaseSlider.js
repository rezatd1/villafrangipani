import React, { useEffect } from 'react';

export default function BaseSlider({ img, title }) {
    useEffect(() => {
        console.log('***img', img.slice(img.length - 1))
    }, [img])
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img[0].img} className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block bg-light-blue-09 p-3">
                        <h5 className='w-auto'>{title}</h5>
                    </div>
                </div>
                {img.length > 1 ?
                    img.slice(1).map((item, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={item.img} className="d-block w-100" />
                            <div className="carousel-caption d-none d-md-block bg-light-blue-09 p-3">
                                {console.log('***item.img', item.img)}
                                <h5>{title}</h5>
                            </div>
                        </div>
                    ))
                    : null}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}
