import React from 'react'
import './IntroSectionStyles.css'
import ScrollAnimation from '../../../animations/ScrollAnimation'
import { scrollVariants } from './AnimationVariants'
const IntroSection = (props) => {
  return (
    <div className="introMain">
    <ScrollAnimation variant={scrollVariants} duration={1}>
      <div class="center-box">
        <p dangerouslySetInnerHTML={{ __html: props.introText }}></p>
      </div>
    </ScrollAnimation>
  </div>
  )
}

export default IntroSection
