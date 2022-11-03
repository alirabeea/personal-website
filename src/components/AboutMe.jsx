import React, { useState } from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className='about--me--container'>
        <div className='about--me--box'>
            <div className='about--me--picture'></div>
            <div className='about--me--textBox'>
                <p>My name is Ali Rabeea. I am a senior-year student studying at University of Massachusetts - Amherst pursuing a Bachelors of Science in Computer Science.</p>
                <p>After concluding my studies, I plan to pursue a full-time job as a Software Engineer. Developing programs and softwares that ease and aid everyday people’s lives is what I am the most passionate about. I also like a good challenge that tests the limits of my capabilities, as well as my problem-solving and thinking skills.</p>
                <p>Quick Learner, Curiosity Driven, Efficient. I strive to learn about everything Computer Science has to offer and find my true calling. I love to learn, and it excites me knowing how much I still do not know. Working on projects is a personal pleasure of mine, especially figuring out hard problems that I face along the way.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
