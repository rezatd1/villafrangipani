import React from 'react'

export default function MenuItems({ resource }) {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column my-5 mx-0 px-0 mx-lg-5 px-lg-5 mx-md-5 px-md-5 mx-sm-0 px-sm-0'>
            <p className='cu-page-title h4 text-black'>{resource.page}</p>
            {resource.info.map((item) => {
                return item.text === null ? (
                    <div key={item.id} className='cu-page-title h5 text-black-50 fw-bold mt-5 text-center lh-lg'>{item.title}</div>
                ) : (
                    item.text === 1 ? (
                        <div key={item.id} className='mt-5 d-flex justify-content-center align-items-center flex-column mx-2 px-4 mx-lg-5 px-lg-5 mx-md-5 px-md-5 mx-sm-2 px-sm-4'>
                            <div className='cu-page-title h2 middle-blue mb-4 text-center'>{item.title}</div>
                            <div className='h2 middle-blue fw-light text-center'>**********************************</div>
                        </div>
                    ) : (
                        <div key={item.id} className='mt-5 d-flex justify-content-center align-items-center flex-column mx-2 px-4 mx-lg-5 px-lg-5 mx-md-5 px-md-5 mx-sm-2 px-sm-4'>
                            <div className='cu-page-title h5 text-black-50 fw-bold mb-3 text-center'>{item.title}</div>
                            <div className='font-size-1-1 text-center'>{item.text}</div>
                        </div>
                    )
                );
            })}
        </div>
    )
}
