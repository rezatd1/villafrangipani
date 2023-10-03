import React from 'react';
import Figure from '../../../components/figure/Figure';
import RtlFigure from '../../../components/figure/RtlFigure';
import FigureResources from '../../../resources/FigureResources';
import FamilyTextContainer from './FamilyTextContainer';
import FigureButton from './FigureButton';
import './Family.scss'

export default function FigureSection() {
    return (
        <div className='mx-5'>
            <Figure title={FigureResources[0].title} text={FigureResources[0].text} img={FigureResources[0].img} desktopSize='100vh' mobileSize='300px' />
            <RtlFigure title={FigureResources[1].title} text={FigureResources[1].text} img={FigureResources[1].img} desktopSize='60vh' mobileSize='300px' />
            <Figure title={FigureResources[2].title} text={FigureResources[2].text} img={FigureResources[2].img} desktopSize='70vh' mobileSize='300px' />
            <FamilyTextContainer />
            <FigureButton />
        </div>
    )
}
