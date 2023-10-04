import React from 'react'
import { Link } from 'react-router-dom'

export default function FigureButton() {
    return (
        <div className='d-flex justify-content-end me-2 mb-5'>
            <button type="button" class="btn cu-btn-outline px-5 py-4 light-blue font-size-1-1">
                <Link to='/location/neighbourhood' class='text-decoration-none light-blue'>Tell Me More</Link>
            </button>
        </div>
    )
}
