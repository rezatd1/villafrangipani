import React from 'react';
import ReviewCard from '../../../components/cards/ReviewCard';
import ReviewsResources from '../../../resources/ReviewsResources';
import CommonHelper from '../../../utilities/commonHelper/CommonHelper';
import RightArrow from '../../../assets/img/right-arrow-60-white.webp';
import LeftArrow from '../../../assets/img/left-arrow-60-white.webp';
import './ReviewSection.scss';

export default function ReviewsSection() {
    return (
        <div className='mx-3 mx-lg-5 mx-md-5 mx-sm-3'>
            <div id="carouselExample" className="carousel slide mb-5">
                <div className="carousel-inner">
                    <div className="carousel-item active row mb-5">
                        <div className='d-flex justify-content-evenly'>
                            {CommonHelper.isMobileDevice() ? (
                                <ReviewCard className='col-10' title={ReviewsResources[0].title1} text={ReviewsResources[0].text1} author={ReviewsResources[0].author1} />
                            ) : (
                                <>
                                    <ReviewCard className='col-5' title={ReviewsResources[0].title1} text={ReviewsResources[0].text1} author={ReviewsResources[0].author1} />
                                    <ReviewCard className='col-5' title={ReviewsResources[0].title2} text={ReviewsResources[0].text2} author={ReviewsResources[0].author2} />
                                </>
                            )}
                        </div>
                    </div>
                    {CommonHelper.isMobileDevice() ? (
                        ReviewsResources.slice(1).map(item => (
                            <>
                                <div className="carousel-item row">
                                    <div className='d-flex justify-content-center'>
                                        <ReviewCard className='col-10' title={item.title1} text={item.text1} author={item.author1} />
                                    </div>
                                </div>
                                <div className="carousel-item row">
                                    <div className='d-flex justify-content-center'>
                                        <ReviewCard className='col-10' title={item.title2} text={item.text2} author={item.author2} />
                                    </div>
                                </div>
                            </>
                        ))
                    ) : (
                        ReviewsResources.slice(1).map(item => (
                            <div className="carousel-item row">
                                <div className='d-flex justify-content-evenly'>
                                    <ReviewCard className='col-5' title={item.title1} text={item.text1} author={item.author1} />
                                    <ReviewCard className='col-5' title={item.title2} text={item.text2} author={item.author2} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <button className="carousel-control-prev review-slider-icon-left" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span>
                        <img src={LeftArrow} alt='left arrow' className='bg-light-blue rounded-circle' />
                    </span>
                </button>
                <button className="carousel-control-next review-slider-icon-right" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span>
                        <img src={RightArrow} alt='right arrow' className='bg-light-blue rounded-circle' />
                    </span>
                </button>
            </div>
        </div>
    );
}