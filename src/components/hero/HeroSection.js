import React, {useState} from 'react';

import { Button } from '../shared/ButtonElements';
import { HeroContainer, HeroBg, ImageBg, HeroH1, HeroP, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements'

const HeroSection = () => {
  const [hover, SetHover] = useState(false)

  const onHover = () => {
    SetHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image} type='image/jpg'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Vactationing Made Easy</HeroH1>
        <HeroP>
          Where are you going next?
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />} 
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
