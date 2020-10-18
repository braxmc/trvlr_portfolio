import React from 'react';
import icon1 from '../../images/svg5.svg'
import icon2 from '../../images/svg6.svg'
import icon3 from '../../images/svg7.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>
        The Service
      </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesH2>Location</ServicesH2>
          <ServicesP>
            You pick the perfect location for your Adventure.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesH2>Discounts</ServicesH2>
          <ServicesP>
            We find all the best discounts during your specified dates.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon3} />
          <ServicesH2>Happiness</ServicesH2>
          <ServicesP>
            For the whole family when you are having fun together!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;