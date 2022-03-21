import React from 'react'
import "./about.css";
import TXST from "../../img/Texas_State_University.png";
import Cole from "../../img/cole.jpg";

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className='a-card'>
            <div className="img">
                <img src={Cole} alt="" className="a-img" />
            </div>
            </div>
            
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a graduate from Texas State University looking to start a new and exciting
          chaper in my life.
        </p>
        <p className="a-desc">
        I plan to start fresh, doing the things I love most, and pursuing my
         passions. Despite covid restrictions, a primary hobby of mine is to travel
         to see and try new places. There is always something new and even in the slightest
         way eye-opening about the experience that keeps me wanting to explore.
         Other ways I spend my time as of recent include chess,
         video games, fitness, and most importantly hanging out with family and friends. I started
         my job hunt in mid-February and am eager to find the next role that I can dive into.
         I don't mind relocating, trying new things, or learning new technologies. I find
         one of the best things in life is getting out of your comfort zone and learning
         new things daily. I have worked since the age of 16 with only 6 months
         of unemployment when the lockdown started. The skills and work ethic I've learned
         from the people along the way I believe to be valuable in any setting I find myself
         in. My goal for the near future is to start working as a software engineer and
    continue learning on a day-to-day basis.   
        </p>
        <div className="a-award">
          <img src={TXST} alt="" className="a-award-img" />
          <div className="a-award-texts">
          <h4 className="a-award-title">Texas State University</h4>
            <p className="a-award-desc">
              Bachelors of Science in Computer Science (Graduation Fall 2021).
            </p>
          </div>
        </div>

        </div>
    </div>
  )
}

export default About